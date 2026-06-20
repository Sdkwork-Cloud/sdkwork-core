import { afterEach, describe, expect, it } from "vitest";

import { createPcReactEnvConfig } from "../src/env";

function createTestAccessToken(claims: Record<string, unknown>): string {
  const body = btoa(JSON.stringify(claims)).replace(/=+$/g, "");
  return `header.${body}.signature`;
}

afterEach(() => {
  delete (window as Window & { __TAURI__?: unknown; __TAURI_INTERNALS__?: unknown }).__TAURI__;
  delete (window as Window & { __TAURI__?: unknown; __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__;
});

describe("createPcReactEnvConfig", () => {
  it("resolves owner-scoped tenant base url and access token", () => {
    const env = createPcReactEnvConfig({
      VITE_APP_ENV: "development",
      VITE_OWNER_MODE: "tenant",
      VITE_API_BASE_URL: "https://default.example.com/",
      VITE_TENANT_API_BASE_URL: "https://tenant.example.com///",
      VITE_ROOT_API_BASE_URL: "https://root.example.com",
      VITE_ACCESS_TOKEN: "default-access",
      VITE_TENANT_ACCESS_TOKEN: "tenant-access",
      VITE_ROOT_ACCESS_TOKEN: "root-access",
      VITE_IM_WS_URL: "wss://tenant-im.example.com/ws/",
      VITE_TIMEOUT: "45000",
      VITE_PLATFORM: "desktop"
    });

    expect(env.appEnv).toBe("development");
    expect(env.owner.mode).toBe("tenant");
    expect(env.api.baseUrl).toBe("https://tenant.example.com");
    expect(env.auth.accessToken).toBe("tenant-access");
    expect(env.realtime.imWsUrl).toBe("wss://tenant-im.example.com/ws");
    expect(env.api.timeout).toBe(45000);
    expect(env.platform.id).toBe("desktop");
  });

  it("derives tenant and organization identity from dual-token access token claims", () => {
    const accessToken = createTestAccessToken({
      tenant_id: "tenant-from-token",
      organization_id: "org-from-token",
    });
    const env = createPcReactEnvConfig({
      VITE_APP_ENV: "test",
      VITE_API_BASE_URL: "https://primary.example.com/",
      VITE_ACCESS_TOKEN: accessToken,
      VITE_TENANT_ID: "tenant-env-ignored",
      SDKWORK_TENANT_ID: "tenant-legacy-ignored",
      VITE_ORGANIZATION_ID: "org-env-ignored",
      SDKWORK_ORGANIZATION_ID: "org-legacy-ignored",
    });

    expect(env.appEnv).toBe("test");
    expect(env.api.baseUrl).toBe("https://primary.example.com");
    expect(env.auth.accessToken).toBe(accessToken);
    expect(env.owner.tenantId).toBe("tenant-from-token");
    expect(env.owner.organizationId).toBe("org-from-token");
  });

  it("supports legacy desktop vite compatibility keys for base url, access token, and platform", () => {
    const env = createPcReactEnvConfig({
      VITE_APP_ENV: "production",
      VITE_APP_BASE_URL: "https://legacy-app.example.com/",
      VITE_APP_ACCESS_TOKEN: "legacy-app-access",
      VITE_APP_PLATFORM: "desktop-notes"
    });

    expect(env.appEnv).toBe("production");
    expect(env.api.baseUrl).toBe("https://legacy-app.example.com");
    expect(env.auth.accessToken).toBe("legacy-app-access");
    expect(env.platform.id).toBe("desktop-notes");
  });

  it("supports app-prefixed owner mode and owner-scoped desktop env compatibility keys", () => {
    const orgAccessToken = createTestAccessToken({
      tenant_id: "tenant-1001",
      organization_id: "org-1001",
    });
    const env = createPcReactEnvConfig({
      VITE_APP_ENV: "development",
      VITE_APP_OWNER_MODE: "organization",
      VITE_API_BASE_URL: "https://root.example.com/",
      VITE_APP_ORGANIZATION_API_BASE_URL: "https://org.example.com///",
      VITE_ACCESS_TOKEN: "root-access",
      VITE_APP_ORGANIZATION_ACCESS_TOKEN: orgAccessToken,
    } as Record<string, string>);

    expect(env.owner.mode).toBe("organization");
    expect(env.api.baseUrl).toBe("https://org.example.com");
    expect(env.auth.accessToken).toBe(orgAccessToken);
    expect(env.owner.organizationId).toBe("org-1001");
    expect(env.owner.tenantId).toBe("tenant-1001");
  });

  it("detects desktop mode when the Tauri runtime is exposed through __TAURI__", () => {
    (window as Window & { __TAURI__?: unknown }).__TAURI__ = {};

    const env = createPcReactEnvConfig({
      VITE_APP_ENV: "development"
    });

    expect(env.platform.isDesktop).toBe(true);
    expect(env.platform.isTauri).toBe(true);
    expect(env.platform.id).toBe("desktop");
  });
});
