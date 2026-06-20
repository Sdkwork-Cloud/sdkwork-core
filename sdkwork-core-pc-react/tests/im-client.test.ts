import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const disconnectMock = vi.fn();
  const connectMock = vi.fn(async (options?: Record<string, unknown>) => ({
    lifecycle: {
      onStateChange: vi.fn((listener: (state: { status: string }) => void) => {
        listener({ status: "connected" });
        return () => undefined;
      })
    },
    disconnect: disconnectMock,
    options
  }));
  const sdkInstances: Array<Record<string, unknown>> = [];

  const imClientFactory = vi.fn((options: Record<string, unknown>) => {
    const client = {
      options,
      connect: connectMock
    };

    sdkInstances.push(client);
    return client;
  });

  return {
    connectMock,
    disconnectMock,
    imClientFactory,
    sdkInstances
  };
});

const ORIGINAL_ENV = {
  VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  SDKWORK_ACCESS_TOKEN: process.env.SDKWORK_ACCESS_TOKEN
};

describe("im client runtime", () => {
  beforeEach(async () => {
    process.env.VITE_API_BASE_URL = "https://api.example.com/";
    process.env.SDKWORK_ACCESS_TOKEN = "runtime-access-token";

    mocks.connectMock.mockClear();
    mocks.disconnectMock.mockClear();
    mocks.imClientFactory.mockClear();
    mocks.sdkInstances.length = 0;

    const { resetPcReactRuntime } = await import("../src/runtime");
    resetPcReactRuntime();
    const { configurePcReactRuntime } = await import("../src");
    configurePcReactRuntime({
      imConfigOverrides: {
        clientFactory: mocks.imClientFactory
      }
    });
  });

  afterAll(() => {
    process.env.VITE_API_BASE_URL = ORIGINAL_ENV.VITE_API_BASE_URL;
    process.env.SDKWORK_ACCESS_TOKEN = ORIGINAL_ENV.SDKWORK_ACCESS_TOKEN;
  });

  it("syncs separated transport tokens and login session into the IM runtime", async () => {
    const { readPcReactRuntimeSession } = await import("../src");
    const { syncImClientSession, getImSessionIdentity } = await import("../src/im");

    await syncImClientSession(
      {
        userId: "user-1",
        username: "neo",
        displayName: "Neo",
        authToken: "Bearer auth-token",
        accessToken: "tenant-access-token"
      },
      {
        realtimeSession: {
          uid: "user-1",
          token: "wk-token",
          wsUrl: "wss://im.example.com/ws",
          deviceId: "device-1"
        }
      }
    );

    expect(mocks.sdkInstances[0].options).toEqual(
      expect.objectContaining({
        baseUrl: "https://api.example.com",
        websocketBaseUrl: "wss://api.example.com/ws"
      })
    );
    expect((mocks.sdkInstances[0].options as { tokenManager: { getAccessToken: () => string; getAuthToken: () => string } }).tokenManager.getAccessToken()).toBe("tenant-access-token");
    expect((mocks.sdkInstances[0].options as { tokenManager: { getAccessToken: () => string; getAuthToken: () => string } }).tokenManager.getAuthToken()).toBe("auth-token");
    expect(mocks.connectMock).toHaveBeenCalledWith({
      deviceId: "device-1",
      url: "wss://im.example.com/ws",
      headers: {
        Authorization: "Bearer wk-token"
      }
    });
    expect(getImSessionIdentity()).toEqual({
      userId: "user-1",
      username: "neo",
      displayName: "Neo",
      authToken: "auth-token",
      accessToken: "tenant-access-token"
    });
    expect(readPcReactRuntimeSession()).toEqual({
      authToken: "auth-token",
      accessToken: "tenant-access-token",
      refreshToken: undefined,
      im: {
        userId: "user-1",
        username: "neo",
        displayName: "Neo",
        authToken: "auth-token",
        accessToken: "tenant-access-token"
      }
    });
  });

  it("creates an IM runtime config directly from a provided env source", async () => {
    const { createImRuntimeConfigFromEnv } = await import("../src/im");

    const config = createImRuntimeConfigFromEnv(
      {
        VITE_APP_ENV: "development",
        VITE_APP_API_BASE_URL: "https://im-app.example.com/",
        SDKWORK_ACCESS_TOKEN: "im-access-token",
        VITE_APP_PLATFORM: "desktop-chat"
      },
      {
        timeout: 18_000
      }
    );

    expect(config).toEqual({
      baseUrl: "https://im-app.example.com",
      timeout: 18_000,
      accessToken: "im-access-token",
      platform: "desktop-chat",
      websocketBaseUrl: "wss://im-app.example.com/ws"
    });
  });

  it("restores the env access token after clearing a runtime IM login session", async () => {
    const { clearPcReactRuntimeSession } = await import("../src");
    const { clearImClientSession, syncImClientSession } = await import("../src/im");

    await syncImClientSession(
      {
        userId: "user-1",
        username: "neo",
        displayName: "Neo",
        authToken: "Bearer auth-token",
        accessToken: "tenant-access-token"
      },
      {
        bootstrapRealtime: false
      }
    );

    clearPcReactRuntimeSession();
    await clearImClientSession();

    expect((mocks.sdkInstances[0].options as { tokenManager: { getAccessToken: () => string | undefined; getAuthToken: () => string | undefined } }).tokenManager.getAccessToken()).toBe("runtime-access-token");
    expect((mocks.sdkInstances[0].options as { tokenManager: { getAccessToken: () => string | undefined; getAuthToken: () => string | undefined } }).tokenManager.getAuthToken()).toBeUndefined();
  });

  it("requires a user id before syncing an IM session", async () => {
    const { syncImClientSession } = await import("../src/im");

    await expect(
      syncImClientSession(
        {
          userId: "",
          username: "neo",
          displayName: "Neo",
          authToken: "Bearer auth-token"
        },
        {
          bootstrapRealtime: false
        }
      )
    ).rejects.toThrow("IM user id is required");
  });

  it("merges runtime-resolved headers into the IM transport config", async () => {
    const { configurePcReactRuntime } = await import("../src");
    const { createImClientConfig } = await import("../src/im");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com/"
      },
      headersResolver: ({ target }) => ({
        "Accept-Language": target === "im" ? "zh-CN" : "ignored"
      })
    });

    const config = createImClientConfig({
      headers: {
        "X-Im-Trace": "trace-1"
      }
    });

    expect(config.headers).toMatchObject({
      "Accept-Language": "zh-CN",
      "Access-Token": "runtime-access-token",
      "X-Im-Trace": "trace-1"
    });
  });

  it("injects the standard Access-Token header into IM transport config", async () => {
    const { configurePcReactRuntime } = await import("../src");
    const { createImClientConfig } = await import("../src/im");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com/",
        SDKWORK_ACCESS_TOKEN: "access-token"
      }
    });

    const config = createImClientConfig({
      authToken: "auth-token"
    });

    expect(config.headers).toMatchObject({
      "Access-Token": "access-token"
    });
    expect(Object.keys(config.headers ?? {}).filter((name) => name.toLowerCase().endsWith("access-token"))).toEqual([
      "Access-Token"
    ]);
  });

  it("requires an injected realtime client factory before connecting IM realtime", async () => {
    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src");
    const { getImClient } = await import("../src/im");

    resetPcReactRuntime();
    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com/",
        SDKWORK_ACCESS_TOKEN: "runtime-access-token"
      }
    });

    await expect(getImClient().connect({ deviceId: "device-1" })).rejects.toThrow(
      "IM realtime clientFactory is required after messaging runtime extraction"
    );
  });
});
