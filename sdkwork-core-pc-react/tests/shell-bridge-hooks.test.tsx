import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { TEST_DEPLOYMENT_ACCESS_TOKEN } from "./helpers/testEnvTokens";

const mocks = vi.hoisted(() => {
  const appClient = {
    setAccessToken: vi.fn(),
    setAuthToken: vi.fn(),
  };
  const imClient = {
    auth: {
      clearToken: vi.fn(),
      useToken: vi.fn(),
    },
    connect: vi.fn(),
  };

  return {
    appClient,
    createAppClientMock: vi.fn(() => appClient),
    imClient,
    imClientFactory: vi.fn(() => imClient),
  };
});

describe("shell bridge hook", () => {
  beforeEach(async () => {
    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src");
    resetPcReactRuntime();
    configurePcReactRuntime({
      envSource: {
        SDKWORK_ACCESS_TOKEN: TEST_DEPLOYMENT_ACCESS_TOKEN,
        VITE_API_BASE_URL: "https://api.example.com",
      },
      preferences: {
        defaults: {
          locale: "en-US",
          themeColor: "zinc",
          themeSelection: "system",
        },
      },
      appClientFactory: mocks.createAppClientMock,
      imConfigOverrides: {
        clientFactory: mocks.imClientFactory,
      },
    });
  });

  it("rerenders the bridge for preference and session updates without recreating the app singleton", async () => {
    const coreModule = await import("../src");
    const persistPcReactRuntimeSession = (coreModule as Record<string, any>).persistPcReactRuntimeSession;
    const persistPcReactShellPreferences = (coreModule as Record<string, any>).persistPcReactShellPreferences;
    const useAppClient = (coreModule as Record<string, any>).useAppClient;
    const usePcReactShellBridgeValue = (coreModule as Record<string, any>).usePcReactShellBridgeValue;

    let appRenderCount = 0;
    let bridgeRenderCount = 0;

    const appHook = renderHook(() => {
      appRenderCount += 1;
      return useAppClient();
    });
    const bridgeHook = renderHook(() => {
      bridgeRenderCount += 1;
      return usePcReactShellBridgeValue();
    });

    const baselineAppRenderCount = appRenderCount;
    const baselineBridgeRenderCount = bridgeRenderCount;

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
    expect(mocks.createAppClientMock).toHaveBeenCalledTimes(1);
    expect(mocks.imClientFactory).not.toHaveBeenCalled();
  });
});
