import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  TEST_DEPLOYMENT_ACCESS_TOKEN,
  testDeploymentAccessToken,
} from "./helpers/testEnvTokens";

const LEGACY_APP_ACCESS = testDeploymentAccessToken({ marker: "legacy-app" });
const ENV_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "env" });
const RUNTIME_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "runtime" });
const OVERRIDE_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "override" });
const SCOPED_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "scoped" });
const SESSION_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "session" });
const HEADER_ACCESS_TOKEN = testDeploymentAccessToken({ marker: "header" });

const mocks = vi.hoisted(() => {
  const appClient = {
    analytic: { kind: "analytic" },
    asset: { kind: "asset" },
    coupon: { kind: "coupon" },
    note: { kind: "note" },
    order: { kind: "order" },
    payment: { kind: "payment" },
    project: { kind: "project" },
    setting: { kind: "setting" },
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn(),
    workspace: { kind: "workspace" }
  };

  return {
    appClient,
    createClientMock: vi.fn(() => appClient)
  };
});

describe("app client runtime", () => {
  beforeEach(async () => {
    mocks.createClientMock.mockClear();
    mocks.appClient.setAuthToken.mockClear();
    mocks.appClient.setAccessToken.mockClear();

    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src/runtime");
    resetPcReactRuntime();
    configurePcReactRuntime({
      appClientFactory: mocks.createClientMock
    });
    window.localStorage.clear();
  });

  it("hydrates the app client with auth token and owner-scoped access token", async () => {
    const {
      configurePcReactRuntime,
      createAppClientConfig,
      getAppClientWithSession,
      persistPcReactRuntimeSession
    } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_OWNER_MODE: "tenant",
        VITE_TENANT_API_BASE_URL: "https://tenant.example.com/",
        SDKWORK_ACCESS_TOKEN: TEST_DEPLOYMENT_ACCESS_TOKEN
      }
    });

    persistPcReactRuntimeSession({
      authToken: "Bearer auth-token",
      refreshToken: "refresh-token"
    });

    const config = createAppClientConfig();
    const client = getAppClientWithSession();

    expect(config.baseUrl).toBe("https://tenant.example.com");
    expect(config.accessToken).toBe(TEST_DEPLOYMENT_ACCESS_TOKEN);
    expect(config.authMode).toBe("dual-token");
    expect(mocks.createClientMock).toHaveBeenCalledTimes(1);
    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("auth-token");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith(TEST_DEPLOYMENT_ACCESS_TOKEN);
    expect(client).toBe(mocks.appClient);
  });

  it("switches to api-key mode when api key is configured through overrides", async () => {
    const { createAppClientConfig } = await import("../src");

    const config = createAppClientConfig({
      baseUrl: "https://api.example.com",
      apiKey: "pc-api-key"
    });

    expect(config.baseUrl).toBe("https://api.example.com");
    expect(config.apiKey).toBe("pc-api-key");
    expect(config.authMode).toBe("apikey");
  });

  it("keeps dual-token mode when api key and access token are both present through overrides", async () => {
    const { createAppClientConfig } = await import("../src");

    const config = createAppClientConfig({
      baseUrl: "https://api.example.com",
      apiKey: "pc-api-key",
      accessToken: OVERRIDE_ACCESS_TOKEN
    });

    expect(config.apiKey).toBe("pc-api-key");
    expect(config.accessToken).toBe(OVERRIDE_ACCESS_TOKEN);
    expect(config.authMode).toBe("dual-token");
  });

  it("creates an app client config directly from a provided env source", async () => {
    const { createAppClientConfigFromEnv } = await import("../src");

    const config = createAppClientConfigFromEnv(
      {
        VITE_APP_ENV: "production",
        VITE_APP_BASE_URL: "https://legacy-app.example.com/",
        SDKWORK_ACCESS_TOKEN: LEGACY_APP_ACCESS,
        VITE_APP_PLATFORM: "desktop-notes"
      },
      {
        timeout: 12_000
      }
    );

    expect(config).toMatchObject({
      env: "production",
      baseUrl: "https://legacy-app.example.com",
      accessToken: LEGACY_APP_ACCESS,
      platform: "desktop-notes",
      timeout: 12_000
    });
  });

  it("treats initAppClient overrides as the singleton bootstrap config", async () => {
    const { getAppClientConfig, initAppClient } = await import("../src");

    const client = initAppClient({
      baseUrl: "https://override.example.com",
      accessToken: OVERRIDE_ACCESS_TOKEN,
      tenantId: "tenant-1"
    });

    expect(client).toBe(mocks.appClient);
    expect(getAppClientConfig()).toMatchObject({
      baseUrl: "https://override.example.com",
      accessToken: OVERRIDE_ACCESS_TOKEN,
      tenantId: "tenant-1"
    });
  });

  it("resolves the active app access token from runtime session or env fallback", async () => {
    const {
      configurePcReactRuntime,
      persistPcReactRuntimeSession,
      resetPcReactRuntime,
      resolveAppClientAccessToken,
      resolveAppClientAccessTokenFromEnv
    } = await import("../src");

    resetPcReactRuntime();

    expect(resolveAppClientAccessTokenFromEnv({ VENDOR_ACCESS_TOKEN: "fallback-token" })).toBe("");

    configurePcReactRuntime({
      envSource: {
        SDKWORK_ACCESS_TOKEN: ENV_ACCESS_TOKEN
      }
    });

    expect(resolveAppClientAccessToken()).toBe(ENV_ACCESS_TOKEN);

    persistPcReactRuntimeSession({
      accessToken: RUNTIME_ACCESS_TOKEN
    });

    expect(resolveAppClientAccessToken()).toBe(RUNTIME_ACCESS_TOKEN);
  });

  it("honors scoped token overrides instead of silently falling back to the global session", async () => {
    const { configurePcReactRuntime, createScopedAppClient } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        SDKWORK_ACCESS_TOKEN: TEST_DEPLOYMENT_ACCESS_TOKEN
      }
    });

    createScopedAppClient({
      authToken: "Bearer scoped-auth",
      accessToken: SCOPED_ACCESS_TOKEN
    });

    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("scoped-auth");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith(SCOPED_ACCESS_TOKEN);
  });

  it("restores the env access token after clearing a runtime login session", async () => {
    const {
      clearPcReactRuntimeSession,
      configurePcReactRuntime,
      getAppClientWithSession,
      persistPcReactRuntimeSession
    } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        SDKWORK_ACCESS_TOKEN: ENV_ACCESS_TOKEN
      }
    });

    persistPcReactRuntimeSession({
      authToken: "Bearer auth-token",
      accessToken: SESSION_ACCESS_TOKEN
    });

    getAppClientWithSession();
    await clearPcReactRuntimeSession();

    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith(ENV_ACCESS_TOKEN);
  });

  it("decorates the app client with configured compatibility aliases", async () => {
    const { configurePcReactRuntime, getAppClientWithSession } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com"
      },
      appClientCompatAliases: {
        analytics: "analytic",
        assets: "asset",
        notes: "note",
        orders: "order",
        payments: "payment",
        projects: "project",
        settings: "setting",
        workspaces: "workspace"
      }
    });

    const client = getAppClientWithSession() as Record<string, unknown>;

    expect(client.assets).toBe(mocks.appClient.asset);
    expect(client.notes).toBe(mocks.appClient.note);
    expect(client.projects).toBe(mocks.appClient.project);
    expect(client.payments).toBe(mocks.appClient.payment);
    expect(client.orders).toBe(mocks.appClient.order);
    expect(client.settings).toBe(mocks.appClient.setting);
    expect(client.workspaces).toBe(mocks.appClient.workspace);
    expect(client.analytics).toBe(mocks.appClient.analytic);
  });

  it("merges runtime-resolved headers into app client config", async () => {
    const { configurePcReactRuntime, createAppClientConfig } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com"
      },
      headersResolver: ({ target }) => ({
        "Accept-Language": target === "app" ? "zh-CN" : "ignored"
      })
    });

    const config = createAppClientConfig({
      headers: {
        "X-App-Trace": "trace-1"
      }
    });

    expect(config.headers).toEqual({
      "Accept-Language": "zh-CN",
      "X-App-Trace": "trace-1"
    });
  });

  it("injects the standard Access-Token header into app client config", async () => {
    const { configurePcReactRuntime, createAppClientConfig } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        SDKWORK_ACCESS_TOKEN: HEADER_ACCESS_TOKEN
      }
    });

    const config = createAppClientConfig({
      authToken: "auth-token"
    });

    expect(config.headers).toMatchObject({
      "Access-Token": HEADER_ACCESS_TOKEN
    });
    expect(Object.keys(config.headers ?? {}).filter((name) => name.toLowerCase().endsWith("access-token"))).toEqual([
      "Access-Token"
    ]);
  });
});
