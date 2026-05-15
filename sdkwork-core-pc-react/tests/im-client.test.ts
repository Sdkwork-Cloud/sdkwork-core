import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const authUseTokenMock = vi.fn();
  const authClearTokenMock = vi.fn();
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

  const MockImSdkClient = class {
    public readonly options: Record<string, unknown>;
    public readonly auth = {
      useToken: authUseTokenMock,
      clearToken: authClearTokenMock
    };
    public readonly connect = connectMock;

    constructor(options: Record<string, unknown>) {
      this.options = options;
      sdkInstances.push(this as unknown as Record<string, unknown>);
    }
  };

  return {
    authClearTokenMock,
    authUseTokenMock,
    connectMock,
    disconnectMock,
    MockImSdkClient,
    sdkInstances
  };
});

vi.mock("@sdkwork/im-sdk", () => ({
  ImSdkClient: mocks.MockImSdkClient
}));

const ORIGINAL_ENV = {
  VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  VITE_ACCESS_TOKEN: process.env.VITE_ACCESS_TOKEN
};

describe("im client runtime", () => {
  beforeEach(async () => {
    process.env.VITE_API_BASE_URL = "https://api.example.com/";
    process.env.VITE_ACCESS_TOKEN = "runtime-access-token";

    mocks.authClearTokenMock.mockClear();
    mocks.authUseTokenMock.mockClear();
    mocks.connectMock.mockClear();
    mocks.disconnectMock.mockClear();
    mocks.sdkInstances.length = 0;

    const { resetPcReactRuntime } = await import("../src/runtime");
    resetPcReactRuntime();
  });

  afterAll(() => {
    process.env.VITE_API_BASE_URL = ORIGINAL_ENV.VITE_API_BASE_URL;
    process.env.VITE_ACCESS_TOKEN = ORIGINAL_ENV.VITE_ACCESS_TOKEN;
  });

  it("syncs separated transport tokens and login session into the IM runtime", async () => {
    const { syncImClientSession, getImSessionIdentity, readPcReactRuntimeSession } = await import("../src");

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
        apiBaseUrl: "https://api.example.com",
        baseUrl: "https://api.example.com",
        websocketBaseUrl: "wss://api.example.com/ws"
      })
    );
    expect((mocks.sdkInstances[0].options as { tokenProvider: { getAccessToken: () => string; getAuthToken: () => string } }).tokenProvider.getAccessToken()).toBe("tenant-access-token");
    expect((mocks.sdkInstances[0].options as { tokenProvider: { getAccessToken: () => string; getAuthToken: () => string } }).tokenProvider.getAuthToken()).toBe("auth-token");
    expect(mocks.authUseTokenMock).toHaveBeenCalledWith("auth-token");
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
    const { createImRuntimeConfigFromEnv } = await import("../src");

    const config = createImRuntimeConfigFromEnv(
      {
        VITE_APP_ENV: "development",
        VITE_APP_API_BASE_URL: "https://im-app.example.com/",
        VITE_APP_ACCESS_TOKEN: "im-access-token",
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
    const { clearPcReactRuntimeSession, syncImClientSession } = await import("../src");

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

    await clearPcReactRuntimeSession();

    expect((mocks.sdkInstances[0].options as { tokenProvider: { getAccessToken: () => string | undefined; getAuthToken: () => string | undefined } }).tokenProvider.getAccessToken()).toBe("runtime-access-token");
    expect((mocks.sdkInstances[0].options as { tokenProvider: { getAccessToken: () => string | undefined; getAuthToken: () => string | undefined } }).tokenProvider.getAuthToken()).toBeUndefined();
    expect(mocks.authClearTokenMock).toHaveBeenCalled();
  });

  it("requires a user id before syncing an IM session", async () => {
    const { syncImClientSession } = await import("../src");

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
    const { configurePcReactRuntime, createImClientConfig } = await import("../src");

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
      "Sdkwork-Access-Token": "runtime-access-token",
      "X-Im-Trace": "trace-1"
    });
  });

  it("injects the standard SDKWork access token header into IM transport config", async () => {
    const { configurePcReactRuntime, createImClientConfig } = await import("../src");

    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com/",
        VITE_AUTH_TOKEN: "auth-token",
        VITE_ACCESS_TOKEN: "access-token"
      }
    });

    const config = createImClientConfig();

    expect(config.headers).toMatchObject({
      "Sdkwork-Access-Token": "access-token"
    });
    expect(config.headers).not.toHaveProperty("Access-Token");
  });
});
