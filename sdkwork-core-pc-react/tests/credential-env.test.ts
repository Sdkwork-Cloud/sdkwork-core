import { describe, expect, it } from "vitest";

import {
  SDKWORK_ACCESS_TOKEN_ENV_KEY,
  assertNoForbiddenCredentialEnv,
  listForbiddenCredentialEnvViolations,
  resolveSdkworkAccessTokenFromEnv,
} from "../src/env/credentialEnv";

describe("sdkwork credential env", () => {
  it("resolves only SDKWORK_ACCESS_TOKEN", () => {
    expect(
      resolveSdkworkAccessTokenFromEnv({
        SDKWORK_ACCESS_TOKEN: "Bearer tenant-access",
        VITE_ACCESS_TOKEN: "ignored",
      }),
    ).toBe("tenant-access");
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

  it("allows empty forbidden keys and unified SDKWORK_ACCESS_TOKEN", () => {
    expect(() =>
      assertNoForbiddenCredentialEnv({
        [SDKWORK_ACCESS_TOKEN_ENV_KEY]: "tenant-access",
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
