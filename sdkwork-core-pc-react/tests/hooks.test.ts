import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => {
  const appClient = {
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn()
  };
  const backendClient = {
    setAuthToken: vi.fn(),
    setAccessToken: vi.fn()
  };
  const imClient = {
    session: {
      setAuthToken: vi.fn(),
      setAccessToken: vi.fn()
    },
    realtime: {
      onConnectionStateChange: vi.fn(() => () => undefined)
    }
  };

  return {
    appClient,
    backendClient,
    createAppClientMock: vi.fn(() => appClient),
    createImBackendClientMock: vi.fn(() => backendClient),
    imAdapterConstructor: class {},
    imClient,
    imSdkConstructor: vi.fn(() => imClient)
  };
});

vi.mock("@sdkwork/app-sdk", () => ({
  createClient: mocks.createAppClientMock
}));

vi.mock("@sdkwork/im-backend-sdk", () => ({
  createClient: mocks.createImBackendClientMock
}));

vi.mock("@openchat/sdkwork-im-sdk", () => ({
  OpenChatImSdk: class {
    constructor() {
      return mocks.imClient;
    }
  }
}));

vi.mock("@openchat/sdkwork-im-wukongim-adapter", () => ({
  OpenChatWukongimAdapter: mocks.imAdapterConstructor
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

  it("returns centralized singleton clients without requiring a provider", async () => {
    const { useAppClient, useImClient } = await import("../src");

    const app = renderHook(() => useAppClient());
    const im = renderHook(() => useImClient());

    expect(app.result.current).toBe(mocks.appClient);
    expect(im.result.current).toBe(mocks.imClient);
  });
});
