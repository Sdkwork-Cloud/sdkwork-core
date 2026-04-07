import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const backendClient = {
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn()
  };

  const sessionSetAccessTokenMock = vi.fn();
  const sessionSetAuthTokenMock = vi.fn();
  const connectRealtimeMock = vi.fn(async (session?: Record<string, unknown>) => ({
    uid: "user-1",
    token: (session?.token as string | undefined) || "wk-token",
    wsUrl: (session?.wsUrl as string | undefined) || "wss://im.example.com/ws"
  }));
  const disconnectRealtimeMock = vi.fn(async () => undefined);
  const sdkInstances: Array<Record<string, unknown>> = [];
  const adapterInstances: Array<Record<string, unknown>> = [];

  const MockOpenChatImSdk = class {
    public readonly options: Record<string, unknown>;
    public readonly session = {
      setAccessToken: sessionSetAccessTokenMock,
      setAuthToken: sessionSetAuthTokenMock,
      connectRealtime: connectRealtimeMock,
      disconnectRealtime: disconnectRealtimeMock
    };
    public readonly realtime = {
      onConnectionStateChange: vi.fn(() => () => undefined)
    };

    constructor(options: Record<string, unknown>) {
      this.options = options;
      sdkInstances.push(this as unknown as Record<string, unknown>);
    }
  };

  return {
    adapterConstructorMock: class {
      constructor() {
        const instance = { kind: "adapter" };
        adapterInstances.push(instance);
        return instance;
      }
    },
    adapterInstances,
    backendClient,
    connectRealtimeMock,
    createClientMock: vi.fn(() => backendClient),
    disconnectRealtimeMock,
    MockOpenChatImSdk,
    sessionSetAccessTokenMock,
    sessionSetAuthTokenMock,
    sdkInstances
  };
});

vi.mock("@sdkwork/im-backend-sdk", () => ({
  createClient: mocks.createClientMock
}));

vi.mock("@openchat/sdkwork-im-sdk", () => ({
  OpenChatImSdk: mocks.MockOpenChatImSdk
}));

vi.mock("@openchat/sdkwork-im-wukongim-adapter", () => ({
  OpenChatWukongimAdapter: mocks.adapterConstructorMock
}));

const ORIGINAL_ENV = {
  VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  VITE_ACCESS_TOKEN: process.env.VITE_ACCESS_TOKEN
};

describe("im client runtime", () => {
  beforeEach(async () => {
    process.env.VITE_API_BASE_URL = "https://api.example.com/";
    process.env.VITE_ACCESS_TOKEN = "runtime-access-token";

    mocks.createClientMock.mockClear();
    mocks.backendClient.setAuthToken.mockClear();
    mocks.backendClient.setAccessToken.mockClear();
    mocks.sessionSetAccessTokenMock.mockClear();
    mocks.sessionSetAuthTokenMock.mockClear();
    mocks.connectRealtimeMock.mockClear();
    mocks.disconnectRealtimeMock.mockClear();
    mocks.adapterInstances.length = 0;
    mocks.sdkInstances.length = 0;

    const { resetPcReactRuntime } = await import("../src/runtime");
    resetPcReactRuntime();
  });

  afterAll(() => {
    process.env.VITE_API_BASE_URL = ORIGINAL_ENV.VITE_API_BASE_URL;
    process.env.VITE_ACCESS_TOKEN = ORIGINAL_ENV.VITE_ACCESS_TOKEN;
  });

  it("syncs separated backend tokens and login session into the IM runtime", async () => {
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

    expect(mocks.createClientMock).toHaveBeenCalledWith(
      expect.objectContaining({
        baseUrl: "https://api.example.com",
        accessToken: "runtime-access-token"
      })
    );
    expect(mocks.backendClient.setAuthToken).toHaveBeenCalledWith("auth-token");
    expect(mocks.backendClient.setAccessToken).toHaveBeenLastCalledWith("tenant-access-token");
    expect(mocks.sessionSetAuthTokenMock).toHaveBeenCalledWith("auth-token");
    expect(mocks.sessionSetAccessTokenMock).not.toHaveBeenCalled();
    expect(mocks.connectRealtimeMock).toHaveBeenCalledWith({
      uid: "user-1",
      token: "wk-token",
      wsUrl: "wss://im.example.com/ws",
      deviceId: "device-1"
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
      platform: "desktop-chat"
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

    expect(mocks.backendClient.setAuthToken).toHaveBeenLastCalledWith("");
    expect(mocks.backendClient.setAccessToken).toHaveBeenLastCalledWith("runtime-access-token");
    expect(mocks.sessionSetAuthTokenMock).toHaveBeenLastCalledWith("");
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

  it("merges runtime-resolved headers into the IM backend config", async () => {
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

    expect(config.headers).toEqual({
      "Accept-Language": "zh-CN",
      "X-Im-Trace": "trace-1"
    });
  });
});
