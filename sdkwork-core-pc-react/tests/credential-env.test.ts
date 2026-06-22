import { describe, expect, it } from "vitest";

import {
  SDKWORK_ACCESS_TOKEN_ENV_KEY,
  assertNoForbiddenCredentialEnv,
  assertSdkworkJwtCredential,
  createTestJwt,
  listForbiddenCredentialEnvViolations,
  resolveSdkworkAccessTokenFromEnv,
} from "../src/env";

describe("sdkwork credential env", () => {
  const deploymentAccessToken = createTestJwt({
    tenant_id: "tenant-access",
    app_id: "appbase",
    environment: "dev",
    deployment_mode: "saas",
  });

  it("resolves only SDKWORK_ACCESS_TOKEN when it is a JWT", () => {
    expect(
      resolveSdkworkAccessTokenFromEnv({
        SDKWORK_ACCESS_TOKEN: `Bearer ${deploymentAccessToken}`,
        VITE_ACCESS_TOKEN: "ignored",
      }),
    ).toBe(deploymentAccessToken);
  });

  it("rejects semicolon claim-string SDKWORK_ACCESS_TOKEN values", () => {
    expect(() =>
      resolveSdkworkAccessTokenFromEnv({
        SDKWORK_ACCESS_TOKEN:
          "tenant_id=tenant-access;app_id=appbase;environment=dev;deployment_mode=saas",
      }),
    ).toThrow(/semicolon claim-string tokens are not accepted/);
  });

  it("rejects malformed compact tokens", () => {
    expect(() => assertSdkworkJwtCredential("tenant-access", "SDKWORK_ACCESS_TOKEN")).toThrow(
      /header\.payload\.signature/,
    );
  });

  it("rejects app-prefixed, auth, refresh, api key, and browser token env keys", () => {
    const violations = listForbiddenCredentialEnvViolations({
      SDKWORK_APPBASE_ACCESS_TOKEN: "legacy",
      SDKWORK_AUTH_TOKEN: "auth",
      SDKWORK_REFRESH_TOKEN: "refresh",
      SDKWORK_API_KEY: "api-key",
      VITE_ACCESS_TOKEN: "browser-access",
      VITE_AUTH_TOKEN: "browser-auth",
      PORTAL_PUBLIC_ACCESS_TOKEN: "public-access",
    });

    expect(violations.map((violation) => violation.key).sort()).toEqual([
      "PORTAL_PUBLIC_ACCESS_TOKEN",
      "SDKWORK_API_KEY",
      "SDKWORK_APPBASE_ACCESS_TOKEN",
      "SDKWORK_AUTH_TOKEN",
      "SDKWORK_REFRESH_TOKEN",
      "VITE_ACCESS_TOKEN",
      "VITE_AUTH_TOKEN",
    ]);
  });

  it("allows empty forbidden keys and unified SDKWORK_ACCESS_TOKEN JWT", () => {
    expect(() =>
      assertNoForbiddenCredentialEnv({
        [SDKWORK_ACCESS_TOKEN_ENV_KEY]: deploymentAccessToken,
        VITE_ACCESS_TOKEN: "",
        SDKWORK_AUTH_TOKEN: "   ",
      }),
    ).not.toThrow();
  });

  it("throws when forbidden credential env keys contain live values", () => {
    expect(() =>
      assertNoForbiddenCredentialEnv({
        VITE_ACCESS_TOKEN: "browser-access",
      }),
    ).toThrow(/Forbidden credential environment variables: VITE_ACCESS_TOKEN/);
  });
});
