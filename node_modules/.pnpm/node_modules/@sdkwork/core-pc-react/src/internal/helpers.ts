import type { PcReactAuthMode, PcReactRuntimeEnv } from "./contracts";

const DEFAULT_TIMEOUT = 30_000;

export function firstNonEmptyValue(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const normalized = typeof value === "string" ? value.trim() : "";
    if (normalized) {
      return normalized;
    }
  }
  return undefined;
}

export function normalizeString(value?: string): string {
  return (value || "").trim();
}

export function normalizeBearerToken(value?: string): string {
  const normalized = normalizeString(value);
  if (!normalized) {
    return "";
  }

  return normalized.replace(/^Bearer\s+/i, "").trim();
}

export function normalizeUrl(value?: string): string {
  return normalizeString(value).replace(/\/+$/g, "");
}

export function parsePositiveNumber(value?: string, fallback: number = DEFAULT_TIMEOUT): number {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
}

export function parseOptionalNumber(value?: string): number | null {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }
  return parsed;
}

export function parseBoolean(value: string | boolean | undefined, fallback: boolean): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  const normalized = normalizeString(typeof value === "string" ? value : String(fallback)).toLowerCase();
  return normalized === "true" || normalized === "1";
}

export function cloneJsonValue<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function safeParseJson<T>(value: string | null | undefined): T | null {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function safeStringifyJson(value: unknown): string {
  return JSON.stringify(value);
}

export function resolveDefaultBaseUrl(env: PcReactRuntimeEnv): string {
  switch (env) {
    case "production":
      return "https://api.sdkwork.com";
    case "test":
      return "https://api-test.sdkwork.com";
    case "staging":
      return "https://staging-api.sdkwork.com";
    case "development":
    default:
      return "https://api-dev.sdkwork.com";
  }
}

export function resolveDefaultImWsUrl(baseUrl: string): string {
  const normalizedBaseUrl = normalizeUrl(baseUrl);
  if (!normalizedBaseUrl) {
    return "";
  }

  try {
    const url = new URL(normalizedBaseUrl);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    url.pathname = "/ws";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/+$/g, "");
  } catch {
    return "";
  }
}

export function resolveRuntimeEnv(...values: Array<string | undefined>): PcReactRuntimeEnv {
  const normalized = firstNonEmptyValue(...values)?.toLowerCase();

  if (normalized === "production" || normalized === "prod") {
    return "production";
  }

  if (normalized === "test") {
    return "test";
  }

  if (normalized === "staging" || normalized === "stage") {
    return "staging";
  }

  return "development";
}

export function resolveAuthMode(
  apiKey?: string,
  accessToken?: string,
  authToken?: string,
  explicitMode?: PcReactAuthMode
): PcReactAuthMode {
  if (explicitMode) {
    return explicitMode;
  }

  if (normalizeString(apiKey) && !normalizeString(accessToken) && !normalizeString(authToken)) {
    return "apikey";
  }

  return "dual-token";
}
