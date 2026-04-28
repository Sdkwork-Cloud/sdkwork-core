import { describe, expect, it } from "vitest";

const AUTH_TOKEN_STORAGE_KEY = "sdkwork.core.pc-react.auth-token";
const ACCESS_TOKEN_STORAGE_KEY = "sdkwork.core.pc-react.access-token";

function createStorage(entries: Record<string, string>) {
  const values = new Map(Object.entries(entries));

  return {
    getItem(key: string) {
      return values.get(key) ?? null;
    },
    setItem(key: string, value: string) {
      values.set(key, value);
    },
    removeItem(key: string) {
      values.delete(key);
    }
  };
}

describe("runtime session storage", () => {
  it("reloads runtime tokens from the active storage adapter after runtime reconfiguration", async () => {
    const { configurePcReactRuntime, readPcReactRuntimeSession, resetPcReactRuntime } = await import("../src");

    resetPcReactRuntime();

    configurePcReactRuntime({
      storage: createStorage({
        [AUTH_TOKEN_STORAGE_KEY]: "auth-a",
        [ACCESS_TOKEN_STORAGE_KEY]: "access-a"
      })
    });

    expect(readPcReactRuntimeSession()).toEqual({
      authToken: "auth-a",
      accessToken: "access-a",
      refreshToken: undefined
    });

    configurePcReactRuntime({
      storage: createStorage({
        [AUTH_TOKEN_STORAGE_KEY]: "auth-b",
        [ACCESS_TOKEN_STORAGE_KEY]: "access-b"
      })
    });

    expect(readPcReactRuntimeSession()).toEqual({
      authToken: "auth-b",
      accessToken: "access-b",
      refreshToken: undefined
    });
  });

  it("reads legacy split token storage keys during migration", async () => {
    const { configurePcReactRuntime, readPcReactRuntimeSession, resetPcReactRuntime } = await import("../src");

    resetPcReactRuntime();

    configurePcReactRuntime({
      storage: createStorage({
        sdkwork_token: "legacy-auth",
        sdkwork_access_token: "legacy-access",
        sdkwork_refresh_token: "legacy-refresh"
      })
    });

    expect(readPcReactRuntimeSession()).toEqual({
      authToken: "legacy-auth",
      accessToken: "legacy-access",
      refreshToken: "legacy-refresh"
    });
  });

  it("reads legacy JSON auth session storage during migration", async () => {
    const { configurePcReactRuntime, readPcReactRuntimeSession, resetPcReactRuntime } = await import("../src");

    resetPcReactRuntime();

    configurePcReactRuntime({
      envSource: {
        VITE_ACCESS_TOKEN: "env-access"
      },
      storage: createStorage({
        "sdkwork-notes-auth-session": JSON.stringify({
          authToken: "legacy-json-auth",
          refreshToken: "legacy-json-refresh"
        })
      })
    });

    expect(readPcReactRuntimeSession()).toEqual({
      authToken: "legacy-json-auth",
      accessToken: "env-access",
      refreshToken: "legacy-json-refresh"
    });
  });

  it("resolves injected global env sources before falling back to import meta env", async () => {
    const { configurePcReactRuntime, getPcReactEnv, resetPcReactRuntime } = await import("../src");
    const runtimeGlobal = globalThis as typeof globalThis & {
      __SDKWORK_NOTES_ENV__?: Record<string, string | undefined>;
    };

    resetPcReactRuntime();
    runtimeGlobal.__SDKWORK_NOTES_ENV__ = {
      VITE_APP_API_BASE_URL: "https://notes-env.example.com/",
      VITE_APP_ACCESS_TOKEN: "notes-access",
      VITE_APP_PLATFORM: "desktop-notes"
    };

    configurePcReactRuntime({
      envGlobalKeys: ["__SDKWORK_NOTES_ENV__"]
    });

    expect(getPcReactEnv().api.baseUrl).toBe("https://notes-env.example.com");
    expect(getPcReactEnv().auth.accessToken).toBe("notes-access");
    expect(getPcReactEnv().platform.id).toBe("desktop-notes");

    delete runtimeGlobal.__SDKWORK_NOTES_ENV__;
  });
});
