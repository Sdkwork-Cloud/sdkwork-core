import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const appClient = {
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn()
  };
  const imClient = {
    auth: {
      clearToken: vi.fn(),
      useToken: vi.fn()
    },
    connect: vi.fn()
  };

  return {
    appClient,
    createAppClientMock: vi.fn(() => appClient),
    imClient,
    imClientFactory: vi.fn(() => imClient)
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
      },
      imConfigOverrides: {
        clientFactory: mocks.imClientFactory
      }
    });
  });

  it("returns the centralized app singleton without requiring a provider", async () => {
    const { useAppClient } = await import("../src");

    const app = renderHook(() => useAppClient());

    expect(app.result.current).toBe(mocks.appClient);
  });
});
