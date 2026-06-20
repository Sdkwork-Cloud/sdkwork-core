import { normalizeBearerToken, normalizeString } from "./helpers";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseJwtPayload(token: string): Record<string, unknown> | undefined {
  const normalizedToken = normalizeBearerToken(token);
  const parts = normalizedToken.split(".");
  if (parts.length < 2) {
    return undefined;
  }

  try {
    const normalized = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4 || 4)) % 4),
      "=",
    );
    const json = atob(padded);
    const parsed = JSON.parse(json) as unknown;
    return isRecord(parsed) ? parsed : undefined;
  } catch {
    return undefined;
  }
}

export function readJwtClaimString(
  claims: Record<string, unknown>,
  ...keys: string[]
): string | undefined {
  for (const key of keys) {
    const value = normalizeString(String(claims[key] ?? ""));
    if (value) {
      return value;
    }
  }

  return undefined;
}

export interface DualTokenIdentityClaims {
  appId?: string;
  organizationId?: string;
  tenantId?: string;
}

function normalizeOrganizationClaim(value?: string): string | undefined {
  if (!value || value === "0") {
    return undefined;
  }

  return value;
}

export function resolveDualTokenIdentityClaims(
  accessToken?: string,
  authToken?: string,
): DualTokenIdentityClaims {
  const accessClaims = accessToken ? parseJwtPayload(accessToken) : undefined;
  const authClaims = authToken ? parseJwtPayload(authToken) : undefined;

  const tenantId =
    readJwtClaimString(accessClaims ?? {}, "tenant_id")
    || readJwtClaimString(authClaims ?? {}, "tenant_id");
  const organizationId = normalizeOrganizationClaim(
    readJwtClaimString(accessClaims ?? {}, "organization_id")
      || readJwtClaimString(authClaims ?? {}, "organization_id"),
  );
  const appId =
    readJwtClaimString(accessClaims ?? {}, "app_id", "aud")
    || readJwtClaimString(authClaims ?? {}, "app_id", "aud");

  return {
    ...(tenantId ? { tenantId } : {}),
    ...(organizationId ? { organizationId } : {}),
    ...(appId ? { appId } : {}),
  };
}
