import { beforeEach, describe, expect, it, vi } from "vitest";

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

vi.mock("@sdkwork/app-sdk", () => ({
  createClient: mocks.createClientMock
}));

describe("app client runtime", () => {
  beforeEach(async () => {
    mocks.createClientMock.mockClear();
    mocks.appClient.setAuthToken.mockClear();
    mocks.appClient.setAccessToken.mockClear();

    const { resetPcReactRuntime } = await import("../src/runtime");
    resetPcReactRuntime();
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
        VITE_TENANT_ACCESS_TOKEN: "tenant-access"
      }
    });

    persistPcReactRuntimeSession({
      authToken: "Bearer auth-token",
      refreshToken: "refresh-token"
    });

    const config = createAppClientConfig();
    const client = getAppClientWithSession();

    expect(config.baseUrl).toBe("https://tenant.example.com");
    expect(config.accessToken).toBe("tenant-access");
    expect(config.authMode).toBe("dual-token");
    expect(mocks.createClientMock).toHaveBeenCalledTimes(1);
    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("auth-token");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith("tenant-access");
    expect(client).toBe(mocks.appClient);
  });

  it("switches to api-key mode when api key is configured", async () => {
    const { configurePcReactRuntime, createAppClientConfig } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        VITE_API_KEY: "pc-api-key"
      }
    });

    const config = createAppClientConfig();

    expect(config.baseUrl).toBe("https://api.example.com");
    expect(config.apiKey).toBe("pc-api-key");
    expect(config.authMode).toBe("apikey");
  });

  it("keeps dual-token mode when api key and access token are both present", async () => {
    const { configurePcReactRuntime, createAppClientConfig } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        VITE_API_KEY: "pc-api-key",
        VITE_ACCESS_TOKEN: "env-access-token"
      }
    });

    const config = createAppClientConfig();

    expect(config.apiKey).toBe("pc-api-key");
    expect(config.accessToken).toBe("env-access-token");
    expect(config.authMode).toBe("dual-token");
  });

  it("creates an app client config directly from a provided env source", async () => {
    const { createAppClientConfigFromEnv } = await import("../src");

    const config = createAppClientConfigFromEnv(
      {
        VITE_APP_ENV: "production",
        VITE_APP_BASE_URL: "https://legacy-app.example.com/",
        VITE_APP_ACCESS_TOKEN: "legacy-app-access",
        VITE_APP_PLATFORM: "desktop-notes"
      },
      {
        timeout: 12_000
      }
    );

    expect(config).toMatchObject({
      env: "production",
      baseUrl: "https://legacy-app.example.com",
      accessToken: "legacy-app-access",
      platform: "desktop-notes",
      timeout: 12_000
    });
  });

  it("treats initAppClient overrides as the singleton bootstrap config", async () => {
    const { getAppClientConfig, initAppClient } = await import("../src");

    const client = initAppClient({
      baseUrl: "https://override.example.com",
      accessToken: "override-access-token",
      tenantId: "tenant-1"
    });

    expect(client).toBe(mocks.appClient);
    expect(getAppClientConfig()).toMatchObject({
      baseUrl: "https://override.example.com",
      accessToken: "override-access-token",
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

    expect(
      resolveAppClientAccessTokenFromEnv({
        VITE_ACCESS_TOKEN: "primary-token",
        SDKWORK_ACCESS_TOKEN: "fallback-token"
      })
    ).toBe("primary-token");

    configurePcReactRuntime({
      envSource: {
        VITE_ACCESS_TOKEN: "env-access-token"
      }
    });

    expect(resolveAppClientAccessToken()).toBe("env-access-token");

    persistPcReactRuntimeSession({
      accessToken: "runtime-access-token"
    });

    expect(resolveAppClientAccessToken()).toBe("runtime-access-token");
  });

  it("honors scoped token overrides instead of silently falling back to the global session", async () => {
    const { configurePcReactRuntime, createScopedAppClient } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        VITE_ACCESS_TOKEN: "env-access"
      }
    });

    createScopedAppClient({
      authToken: "Bearer scoped-auth",
      accessToken: "scoped-access"
    });

    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("scoped-auth");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith("scoped-access");
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
        VITE_ACCESS_TOKEN: "env-access-token"
      }
    });

    persistPcReactRuntimeSession({
      authToken: "Bearer auth-token",
      accessToken: "session-access-token"
    });

    getAppClientWithSession();
    await clearPcReactRuntimeSession();

    expect(mocks.appClient.setAuthToken).toHaveBeenLastCalledWith("");
    expect(mocks.appClient.setAccessToken).toHaveBeenLastCalledWith("env-access-token");
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
});
