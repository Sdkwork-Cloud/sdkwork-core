import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const appClient = {
    setAccessToken: vi.fn(),
    setAuthToken: vi.fn(),
  };
  const backendClient = {
    setAccessToken: vi.fn(),
    setAuthToken: vi.fn(),
  };
  const imClient = {
    realtime: {
      onConnectionStateChange: vi.fn(() => () => undefined),
    },
    session: {
      setAccessToken: vi.fn(),
      setAuthToken: vi.fn(),
    },
  };

  return {
    appClient,
    backendClient,
    createAppClientMock: vi.fn(() => appClient),
    createImBackendClientMock: vi.fn(() => backendClient),
    imAdapterConstructor: class {},
    imClient,
  };
});

vi.mock("@sdkwork/app-sdk", () => ({
  createClient: mocks.createAppClientMock,
}));

vi.mock("@sdkwork/im-backend-sdk", () => ({
  createClient: mocks.createImBackendClientMock,
}));

vi.mock("@openchat/sdkwork-im-sdk", () => ({
  OpenChatImSdk: class {
    constructor() {
      return mocks.imClient;
    }
  },
}));

vi.mock("@openchat/sdkwork-im-wukongim-adapter", () => ({
  OpenChatWukongimAdapter: mocks.imAdapterConstructor,
}));

describe("shell bridge hook", () => {
  beforeEach(async () => {
    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src");
    resetPcReactRuntime();
    configurePcReactRuntime({
      envSource: {
        VITE_ACCESS_TOKEN: "tenant-access-token",
        VITE_API_BASE_URL: "https://api.example.com",
      },
      preferences: {
        defaults: {
          locale: "en-US",
          themeColor: "zinc",
          themeSelection: "system",
        },
      },
    });
  });

  it("rerenders the bridge for preference and session updates without recreating singleton clients", async () => {
    const coreModule = await import("../src");
    const persistPcReactRuntimeSession = (coreModule as Record<string, any>).persistPcReactRuntimeSession;
    const persistPcReactShellPreferences = (coreModule as Record<string, any>).persistPcReactShellPreferences;
    const useAppClient = (coreModule as Record<string, any>).useAppClient;
    const useImClient = (coreModule as Record<string, any>).useImClient;
    const usePcReactShellBridgeValue = (coreModule as Record<string, any>).usePcReactShellBridgeValue;

    let appRenderCount = 0;
    let bridgeRenderCount = 0;
    let imRenderCount = 0;

    const appHook = renderHook(() => {
      appRenderCount += 1;
      return useAppClient();
    });
    const imHook = renderHook(() => {
      imRenderCount += 1;
      return useImClient();
    });
    const bridgeHook = renderHook(() => {
      bridgeRenderCount += 1;
      return usePcReactShellBridgeValue();
    });

    const baselineAppRenderCount = appRenderCount;
    const baselineBridgeRenderCount = bridgeRenderCount;
    const baselineImRenderCount = imRenderCount;

    act(() => {
      persistPcReactShellPreferences({
        locale: "ar-SA",
        themeColor: "rose",
        themeSelection: "dark",
      });
    });

    expect(bridgeHook.result.current.preferences).toMatchObject({
      colorMode: "dark",
      locale: "ar-SA",
      themeColor: "rose",
      themeSelection: "dark",
    });
    expect(bridgeHook.result.current.dir).toBe("rtl");
    expect(bridgeRenderCount).toBeGreaterThan(baselineBridgeRenderCount);
    expect(appRenderCount).toBe(baselineAppRenderCount);
    expect(imRenderCount).toBe(baselineImRenderCount);

    act(() => {
      persistPcReactRuntimeSession({
        accessToken: "bridge-access-token",
        authToken: "bridge-auth-token",
      });
    });

    expect(bridgeHook.result.current.session).toMatchObject({
      accessToken: "bridge-access-token",
      authToken: "bridge-auth-token",
    });
    expect(bridgeRenderCount).toBeGreaterThan(baselineBridgeRenderCount);
    expect(appHook.result.current).toBe(mocks.appClient);
    expect(imHook.result.current).toBe(mocks.imClient);
    expect(mocks.createAppClientMock).toHaveBeenCalledTimes(1);
    expect(mocks.createImBackendClientMock).toHaveBeenCalledTimes(1);
  });
});
