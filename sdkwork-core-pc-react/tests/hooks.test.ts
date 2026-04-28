import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const appClient = {
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn()
  };

  return {
    appClient,
    createAppClientMock: vi.fn(() => appClient)
  };
});

vi.mock("@sdkwork/app-sdk", () => ({
  createClient: mocks.createAppClientMock
}));

describe("core hooks", () => {
  beforeEach(async () => {
    const { configurePcReactRuntime, resetPcReactRuntime } = await import("../src");
    resetPcReactRuntime();
    configurePcReactRuntime({
      envSource: {
        VITE_API_BASE_URL: "https://api.example.com",
        VITE_ACCESS_TOKEN: "tenant-access-token"
      }
    });
  });

  it("returns the centralized singleton app client without requiring a provider", async () => {
    const { useAppClient } = await import("../src");

    const app = renderHook(() => useAppClient());
    const appAgain = renderHook(() => useAppClient());

    expect(app.result.current).toBe(mocks.appClient);
    expect(app.result.current).toBe(appAgain.result.current);
    expect(mocks.createAppClientMock).toHaveBeenCalledTimes(1);
  });
});
