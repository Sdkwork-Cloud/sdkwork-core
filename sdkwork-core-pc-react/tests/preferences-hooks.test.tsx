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

describe("shell preference hooks", () => {
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

  it("rerenders preference hooks without recreating the app client", async () => {
    const {
      persistPcReactShellPreferences,
      useAppClient,
      usePcReactResolvedShellPreferences,
      usePcReactShellPreferences,
    } = await import("../src");

    let appRenderCount = 0;
    let preferenceRenderCount = 0;
    let resolvedPreferenceRenderCount = 0;

    const appHook = renderHook(() => {
      appRenderCount += 1;
      return useAppClient();
    });
    const preferenceHook = renderHook(() => {
      preferenceRenderCount += 1;
      return usePcReactShellPreferences();
    });
    const resolvedPreferenceHook = renderHook(() => {
      resolvedPreferenceRenderCount += 1;
      return usePcReactResolvedShellPreferences();
    });

    const baselineAppRenderCount = appRenderCount;
    const baselinePreferenceRenderCount = preferenceRenderCount;
    const baselineResolvedPreferenceRenderCount = resolvedPreferenceRenderCount;

    act(() => {
      persistPcReactShellPreferences({
        locale: "zh-CN",
        themeColor: "rose",
        themeSelection: "dark",
      });
    });

    expect(preferenceHook.result.current).toEqual({
      locale: "zh-CN",
      localePreference: "zh-CN",
      themeColor: "rose",
      themeSelection: "dark",
    });
    expect(resolvedPreferenceHook.result.current).toEqual({
      colorMode: "dark",
      locale: "zh-CN",
      localePreference: "zh-CN",
      themeColor: "rose",
      themeSelection: "dark",
    });

    expect(preferenceRenderCount).toBeGreaterThan(baselinePreferenceRenderCount);
    expect(resolvedPreferenceRenderCount).toBeGreaterThan(baselineResolvedPreferenceRenderCount);
    expect(appRenderCount).toBe(baselineAppRenderCount);
    expect(appHook.result.current).toBe(mocks.appClient);
    expect(mocks.createAppClientMock).toHaveBeenCalledTimes(1);
    expect(mocks.imClientFactory).not.toHaveBeenCalled();
  });
});
