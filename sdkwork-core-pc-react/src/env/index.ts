import type { OwnerScopedValue, PcReactEnvConfig, PcReactEnvSource, PcReactOwnerMode } from "../internal/contracts";
import {
  firstNonEmptyValue,
  normalizeBearerToken,
  normalizeString,
  normalizeUrl,
  parseBoolean,
  parseOptionalNumber,
  parsePositiveNumber,
  resolveAuthMode,
  resolveDefaultBaseUrl,
  resolveRuntimeEnv
} from "../internal/helpers";

export const SDKWORK_PC_REACT_ENV_KEYS = [
  "VITE_APP_ENV",
  "VITE_APP_OWNER_MODE",
  "VITE_OWNER_MODE",
  "VITE_API_BASE_URL",
  "VITE_APP_BASE_URL",
  "VITE_APP_ROOT_API_BASE_URL",
  "VITE_APP_TENANT_API_BASE_URL",
  "VITE_APP_ORGANIZATION_API_BASE_URL",
  "VITE_ROOT_API_BASE_URL",
  "VITE_APP_ROOT_API_BASE_URL",
  "VITE_TENANT_API_BASE_URL",
  "VITE_APP_TENANT_API_BASE_URL",
  "VITE_ORGANIZATION_API_BASE_URL",
  "VITE_APP_ORGANIZATION_API_BASE_URL",
  "VITE_ACCESS_TOKEN",
  "VITE_APP_ACCESS_TOKEN",
  "VITE_APP_ROOT_ACCESS_TOKEN",
  "VITE_APP_TENANT_ACCESS_TOKEN",
  "VITE_APP_ORGANIZATION_ACCESS_TOKEN",
  "VITE_ROOT_ACCESS_TOKEN",
  "VITE_APP_ROOT_ACCESS_TOKEN",
  "VITE_TENANT_ACCESS_TOKEN",
  "VITE_APP_TENANT_ACCESS_TOKEN",
  "VITE_ORGANIZATION_ACCESS_TOKEN",
  "VITE_APP_ORGANIZATION_ACCESS_TOKEN",
  "VITE_API_KEY",
  "VITE_TIMEOUT",
  "VITE_TENANT_ID",
  "VITE_APP_TENANT_ID",
  "VITE_ORGANIZATION_ID",
  "VITE_APP_ORGANIZATION_ID",
  "VITE_PLATFORM",
  "VITE_APP_PLATFORM",
  "VITE_APP_NAME",
  "VITE_APP_VERSION",
  "VITE_DISTRIBUTION_ID",
  "VITE_APP_ID",
  "VITE_RELEASE_CHANNEL",
  "VITE_ENABLE_STARTUP_UPDATE_CHECK",
  "VITE_DEBUG",
  "VITE_LOG_LEVEL"
] as const;

type RuntimeWindow = Window & {
  __TAURI__?: unknown;
  __TAURI_IPC__?: unknown;
  __TAURI_INTERNALS__?: unknown;
};
type RuntimeGlobal = typeof globalThis & {
  [key: string]: unknown;
};

function readImportMetaEnv(): PcReactEnvSource {
  return ((import.meta as unknown as { env?: PcReactEnvSource }).env ?? {}) as PcReactEnvSource;
}

function readProcessEnv(): PcReactEnvSource {
  const processEnv = (
    globalThis as typeof globalThis & {
      process?: {
        env?: Record<string, string | undefined>;
      };
    }
  ).process?.env;

  return (processEnv ?? {}) as PcReactEnvSource;
}

export function readPcReactEnvSource(): PcReactEnvSource {
  return {
    ...readProcessEnv(),
    ...readImportMetaEnv()
  };
}

export function readPcReactNamedGlobalEnvSources(globalKeys: string[] = []): PcReactEnvSource {
  const runtimeGlobal = globalThis as RuntimeGlobal;

  return globalKeys.reduce<PcReactEnvSource>((accumulator, globalKey) => {
    const source = runtimeGlobal[globalKey];
    if (!source || typeof source !== "object") {
      return accumulator;
    }

    return {
      ...accumulator,
      ...(source as PcReactEnvSource)
    };
  }, {});
}

function detectTauriRuntime(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const runtimeWindow = window as RuntimeWindow;
  return Boolean(runtimeWindow.__TAURI__ || runtimeWindow.__TAURI_IPC__ || runtimeWindow.__TAURI_INTERNALS__);
}

function resolvePlatformId(source: PcReactEnvSource, isTauri: boolean): string {
  if (isTauri) {
    return "desktop";
  }

  return firstNonEmptyValue(
    normalizeString(source.VITE_PLATFORM as string | undefined),
    normalizeString(source.VITE_APP_PLATFORM as string | undefined),
    normalizeString(source.SDKWORK_PLATFORM as string | undefined)
  ) || "web";
}

function resolveOwnerMode(source: PcReactEnvSource): PcReactOwnerMode {
  const explicitOwnerMode = firstNonEmptyValue(
    normalizeString(source.VITE_APP_OWNER_MODE as string | undefined),
    normalizeString(source.VITE_OWNER_MODE as string | undefined),
    normalizeString(source.SDKWORK_OWNER_MODE as string | undefined)
  )?.toLowerCase();

  if (explicitOwnerMode === "organization" || explicitOwnerMode === "org") {
    return "organization";
  }

  if (explicitOwnerMode === "tenant") {
    return "tenant";
  }

  if (explicitOwnerMode === "root") {
    return "root";
  }

  const hasTenantSignals = Boolean(
    firstNonEmptyValue(
      normalizeString(source.VITE_TENANT_ID as string | undefined),
      normalizeString(source.VITE_APP_TENANT_ID as string | undefined),
      normalizeString(source.SDKWORK_TENANT_ID as string | undefined),
      normalizeString(source.VITE_TENANT_ACCESS_TOKEN as string | undefined),
      normalizeString(source.VITE_APP_TENANT_ACCESS_TOKEN as string | undefined),
      normalizeString(source.VITE_TENANT_API_BASE_URL as string | undefined),
      normalizeString(source.VITE_APP_TENANT_API_BASE_URL as string | undefined)
    )
  );
  if (hasTenantSignals) {
    return "tenant";
  }

  const hasOrganizationSignals = Boolean(
    firstNonEmptyValue(
      normalizeString(source.VITE_ORGANIZATION_ID as string | undefined),
      normalizeString(source.VITE_APP_ORGANIZATION_ID as string | undefined),
      normalizeString(source.SDKWORK_ORGANIZATION_ID as string | undefined),
      normalizeString(source.VITE_ORGANIZATION_ACCESS_TOKEN as string | undefined),
      normalizeString(source.VITE_APP_ORGANIZATION_ACCESS_TOKEN as string | undefined),
      normalizeString(source.VITE_ORGANIZATION_API_BASE_URL as string | undefined),
      normalizeString(source.VITE_APP_ORGANIZATION_API_BASE_URL as string | undefined)
    )
  );
  if (hasOrganizationSignals) {
    return "organization";
  }

  return "root";
}

function resolveScopedBaseUrls(source: PcReactEnvSource, runtimeEnv: PcReactEnvConfig["appEnv"]): OwnerScopedValue<string> {
  const defaultBaseUrl = normalizeUrl(
    firstNonEmptyValue(
      normalizeString(source.VITE_API_BASE_URL as string | undefined),
      normalizeString(source.VITE_APP_API_BASE_URL as string | undefined),
      normalizeString(source.VITE_APP_BASE_URL as string | undefined),
      normalizeString(source.SDKWORK_API_BASE_URL as string | undefined),
      resolveDefaultBaseUrl(runtimeEnv)
    )
  );

  return {
    default: defaultBaseUrl,
    root: normalizeUrl(
      firstNonEmptyValue(
        normalizeString(source.VITE_ROOT_API_BASE_URL as string | undefined),
        normalizeString(source.VITE_APP_ROOT_API_BASE_URL as string | undefined),
        defaultBaseUrl
      )
    ),
    tenant: normalizeUrl(
      firstNonEmptyValue(
        normalizeString(source.VITE_TENANT_API_BASE_URL as string | undefined),
        normalizeString(source.VITE_APP_TENANT_API_BASE_URL as string | undefined),
        defaultBaseUrl
      )
    ),
    organization: normalizeUrl(
      firstNonEmptyValue(
        normalizeString(source.VITE_ORGANIZATION_API_BASE_URL as string | undefined),
        normalizeString(source.VITE_APP_ORGANIZATION_API_BASE_URL as string | undefined),
        defaultBaseUrl
      )
    )
  };
}

function resolveScopedAccessTokens(source: PcReactEnvSource): OwnerScopedValue<string> {
  const defaultAccessToken = normalizeBearerToken(
    firstNonEmptyValue(
      normalizeString(source.VITE_ACCESS_TOKEN as string | undefined),
      normalizeString(source.VITE_APP_ACCESS_TOKEN as string | undefined),
      normalizeString(source.SDKWORK_ACCESS_TOKEN as string | undefined)
    )
  );

  return {
    default: defaultAccessToken,
    root: normalizeBearerToken(
      firstNonEmptyValue(
        normalizeString(source.VITE_ROOT_ACCESS_TOKEN as string | undefined),
        normalizeString(source.VITE_APP_ROOT_ACCESS_TOKEN as string | undefined),
        defaultAccessToken
      )
    ),
    tenant: normalizeBearerToken(
      firstNonEmptyValue(
        normalizeString(source.VITE_TENANT_ACCESS_TOKEN as string | undefined),
        normalizeString(source.VITE_APP_TENANT_ACCESS_TOKEN as string | undefined),
        defaultAccessToken
      )
    ),
    organization: normalizeBearerToken(
      firstNonEmptyValue(
        normalizeString(source.VITE_ORGANIZATION_ACCESS_TOKEN as string | undefined),
        normalizeString(source.VITE_APP_ORGANIZATION_ACCESS_TOKEN as string | undefined),
        defaultAccessToken
      )
    )
  };
}

function pickOwnerScopedValue<T>(mode: PcReactOwnerMode, values: OwnerScopedValue<T>): T | undefined {
  if (mode === "tenant") {
    return values.tenant ?? values.default;
  }

  if (mode === "organization") {
    return values.organization ?? values.default;
  }

  return values.root ?? values.default;
}

export function createPcReactEnvConfig(source: PcReactEnvSource = readPcReactEnvSource()): PcReactEnvConfig {
  const appEnv = resolveRuntimeEnv(
    normalizeString(source.VITE_APP_ENV as string | undefined),
    normalizeString(source.MODE as string | undefined),
    normalizeString(source.NODE_ENV as string | undefined)
  );
  const ownerMode = resolveOwnerMode(source);
  const baseUrls = resolveScopedBaseUrls(source, appEnv);
  const accessTokens = resolveScopedAccessTokens(source);
  const baseUrl = normalizeUrl(pickOwnerScopedValue(ownerMode, baseUrls) || resolveDefaultBaseUrl(appEnv));
  const accessToken = normalizeBearerToken(pickOwnerScopedValue(ownerMode, accessTokens));
  const apiKey = normalizeString(
    firstNonEmptyValue(
      normalizeString(source.VITE_API_KEY as string | undefined),
      normalizeString(source.SDKWORK_API_KEY as string | undefined)
    )
  );
  const isTauri = detectTauriRuntime();
  const platformId = resolvePlatformId(source, isTauri);
  const tenantId = normalizeString(
    firstNonEmptyValue(
      normalizeString(source.VITE_TENANT_ID as string | undefined),
      normalizeString(source.VITE_APP_TENANT_ID as string | undefined),
      normalizeString(source.SDKWORK_TENANT_ID as string | undefined)
    )
  );
  const organizationId = normalizeString(
    firstNonEmptyValue(
      normalizeString(source.VITE_ORGANIZATION_ID as string | undefined),
      normalizeString(source.VITE_APP_ORGANIZATION_ID as string | undefined),
      normalizeString(source.SDKWORK_ORGANIZATION_ID as string | undefined)
    )
  );

  return {
    appEnv,
    mode: appEnv,
    isDev: appEnv === "development",
    isTest: appEnv === "test",
    isStaging: appEnv === "staging",
    isProduction: appEnv === "production",
    metadata: {
      name: normalizeString(source.VITE_APP_NAME as string | undefined) || "SDKWork Desktop",
      version: normalizeString(source.VITE_APP_VERSION as string | undefined) || "0.1.0"
    },
    log: {
      debug: parseBoolean(source.VITE_DEBUG, appEnv === "development"),
      level:
        normalizeString(source.VITE_LOG_LEVEL as string | undefined) ||
        (appEnv === "development" ? "debug" : appEnv === "test" ? "info" : "warn")
    },
    owner: {
      mode: ownerMode,
      tenantId,
      organizationId
    },
    api: {
      baseUrl,
      baseUrls,
      timeout: parsePositiveNumber(
        firstNonEmptyValue(
          normalizeString(source.VITE_TIMEOUT as string | undefined),
          normalizeString(source.SDKWORK_TIMEOUT as string | undefined)
        )
      )
    },
    auth: {
      apiKey,
      accessToken,
      accessTokens,
      mode: resolveAuthMode(apiKey, accessToken)
    },
    update: {
      appId: parseOptionalNumber(normalizeString(source.VITE_APP_ID as string | undefined)),
      releaseChannel: normalizeString(source.VITE_RELEASE_CHANNEL as string | undefined) || "stable",
      enableStartupCheck: parseBoolean(source.VITE_ENABLE_STARTUP_UPDATE_CHECK, true)
    },
    distribution: {
      id: normalizeString(source.VITE_DISTRIBUTION_ID as string | undefined) === "cn" ? "cn" : "global"
    },
    platform: {
      id: platformId,
      isDesktop: isTauri || platformId === "desktop",
      isTauri
    },
    vite: {
      isDev: parseBoolean(source.DEV, appEnv === "development"),
      isProd: parseBoolean(source.PROD, appEnv === "production")
    }
  };
}
