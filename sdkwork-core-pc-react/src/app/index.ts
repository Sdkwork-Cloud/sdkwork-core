import { createClient, type SdkworkAppClient, type SdkworkAppConfig } from "@sdkwork/app-sdk";
import { createPcReactEnvConfig } from "../env/index";
import type { PcReactAppClientConfig, PcReactEnvSource, PcReactRuntimeSession } from "../internal/contracts";
import { normalizeBearerToken, resolveAuthMode } from "../internal/helpers";
import {
  getAppClientCache,
  getAppClientConfigCache,
  getPcReactEnv,
  getRuntimeOptions,
  readPcReactRuntimeSession,
  resolveRuntimeHeaders,
  setAppClientCache
} from "../internal/runtimeState";

export const SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES = {
  analytics: "analytic",
  assets: "asset",
  coupons: "coupon",
  notes: "note",
  orders: "order",
  payments: "payment",
  projects: "project",
  settings: "setting",
  workspaces: "workspace"
} as const;

const compatClientSignatures = new WeakMap<object, string>();

function mergeAppClientOverrides(overrides: Partial<SdkworkAppConfig> = {}): Partial<SdkworkAppConfig> {
  const runtimeOptions = getRuntimeOptions();

  return {
    ...(runtimeOptions.appConfigOverrides ?? {}),
    ...overrides
  };
}

function applySessionTokensToAppClient(
  client: SdkworkAppClient,
  session: PcReactRuntimeSession,
  fallbackAccessToken: string
): void {
  client.setAuthToken(normalizeBearerToken(session.authToken));
  client.setAccessToken(normalizeBearerToken(session.accessToken || fallbackAccessToken));
}

function resolveEffectiveClientSession(
  overrides: Partial<SdkworkAppConfig>,
  fallbackAccessToken: string
): PcReactRuntimeSession {
  const session = readPcReactRuntimeSession();
  const mergedOverrides = mergeAppClientOverrides(overrides);

  return {
    ...session,
    authToken:
      mergedOverrides.authToken !== undefined
        ? normalizeBearerToken(mergedOverrides.authToken)
        : normalizeBearerToken(session.authToken),
    accessToken:
      mergedOverrides.accessToken !== undefined
        ? normalizeBearerToken(mergedOverrides.accessToken)
        : normalizeBearerToken(session.accessToken || fallbackAccessToken)
  };
}

function resolveConfiguredAppClientAliases(): Record<string, string> {
  return {
    ...(getRuntimeOptions().appClientCompatAliases ?? {})
  };
}

export function decorateAppClientCompatAliases<TClient extends SdkworkAppClient>(
  client: TClient,
  aliases: Record<string, string> = resolveConfiguredAppClientAliases()
): TClient {
  const normalizedAliases = Object.entries(aliases)
    .filter(([alias, target]) => alias.trim() && target.trim() && alias !== target)
    .sort(([leftAlias], [rightAlias]) => leftAlias.localeCompare(rightAlias));

  if (normalizedAliases.length === 0) {
    return client;
  }

  const signature = JSON.stringify(normalizedAliases);
  const cachedSignature = compatClientSignatures.get(client as object);
  if (cachedSignature === signature) {
    return client;
  }

  for (const [alias, target] of normalizedAliases) {
    Object.defineProperty(client, alias, {
      configurable: true,
      enumerable: false,
      get() {
        return (client as Record<string, unknown>)[target];
      }
    });
  }

  compatClientSignatures.set(client as object, signature);
  return client;
}

function createResolvedAppClientConfig(
  overrides: Partial<SdkworkAppConfig> = {},
  options: {
    includeRuntimeSession: boolean;
  } = {
    includeRuntimeSession: true
  }
): PcReactAppClientConfig {
  const env = getPcReactEnv();
  const session = options.includeRuntimeSession ? readPcReactRuntimeSession() : undefined;
  const mergedOverrides = mergeAppClientOverrides(overrides);
  const resolvedAccessToken = normalizeBearerToken(
    mergedOverrides.accessToken || session?.accessToken || env.auth.accessToken
  );
  const resolvedApiKey = (mergedOverrides.apiKey || env.auth.apiKey || "").trim();
  const resolvedAuthToken = normalizeBearerToken(mergedOverrides.authToken || session?.authToken);

  return {
    env: env.appEnv,
    ownerMode: env.owner.mode,
    baseUrl: mergedOverrides.baseUrl || env.api.baseUrl,
    timeout: mergedOverrides.timeout ?? env.api.timeout,
    apiKey: resolvedApiKey || undefined,
    accessToken: resolvedAccessToken || undefined,
    authToken: resolvedAuthToken || undefined,
    tenantId: (mergedOverrides.tenantId ?? env.owner.tenantId) || undefined,
    organizationId: (mergedOverrides.organizationId ?? env.owner.organizationId) || undefined,
    platform: mergedOverrides.platform ?? env.platform.id,
    tokenManager: mergedOverrides.tokenManager,
    authMode: resolveAuthMode(
      resolvedApiKey,
      resolvedAccessToken,
      resolvedAuthToken,
      mergedOverrides.authMode
    ),
    headers: {
      ...resolveRuntimeHeaders("app", {
        ...(session ?? {}),
        authToken: resolvedAuthToken || undefined,
        accessToken: resolvedAccessToken || undefined
      }),
      ...(mergedOverrides.headers ?? {})
    }
  };
}

function createAppClientConfigFromResolvedEnv(
  env: ReturnType<typeof createPcReactEnvConfig>,
  overrides: Partial<SdkworkAppConfig> = {}
): PcReactAppClientConfig {
  const resolvedAccessToken = normalizeBearerToken(overrides.accessToken || env.auth.accessToken);
  const resolvedApiKey = (overrides.apiKey || env.auth.apiKey || "").trim();
  const resolvedAuthToken = normalizeBearerToken(overrides.authToken);

  return {
    env: env.appEnv,
    ownerMode: env.owner.mode,
    baseUrl: overrides.baseUrl || env.api.baseUrl,
    timeout: overrides.timeout ?? env.api.timeout,
    apiKey: resolvedApiKey || undefined,
    accessToken: resolvedAccessToken || undefined,
    authToken: resolvedAuthToken || undefined,
    tenantId: (overrides.tenantId ?? env.owner.tenantId) || undefined,
    organizationId: (overrides.organizationId ?? env.owner.organizationId) || undefined,
    platform: overrides.platform ?? env.platform.id,
    tokenManager: overrides.tokenManager,
    authMode: resolveAuthMode(resolvedApiKey, resolvedAccessToken, resolvedAuthToken, overrides.authMode),
    headers: {
      ...(overrides.headers ?? {})
    }
  };
}

export function createAppClientConfigFromEnv(
  envSource: PcReactEnvSource,
  overrides: Partial<SdkworkAppConfig> = {}
): PcReactAppClientConfig {
  return createAppClientConfigFromResolvedEnv(createPcReactEnvConfig(envSource), overrides);
}

export function resolveAppClientAccessTokenFromEnv(envSource: PcReactEnvSource): string {
  return normalizeBearerToken(createPcReactEnvConfig(envSource).auth.accessToken);
}

export function createAppClientConfig(overrides: Partial<SdkworkAppConfig> = {}): PcReactAppClientConfig {
  return createResolvedAppClientConfig(overrides, {
    includeRuntimeSession: true
  });
}

function createAppClientBootstrapConfig(overrides: Partial<SdkworkAppConfig> = {}): PcReactAppClientConfig {
  return createResolvedAppClientConfig(overrides, {
    includeRuntimeSession: false
  });
}

export function initAppClient(overrides: Partial<SdkworkAppConfig> = {}): SdkworkAppClient {
  const config = createAppClientBootstrapConfig(overrides);
  const client = decorateAppClientCompatAliases(createClient(config));
  applySessionTokensToAppClient(client, resolveEffectiveClientSession(overrides, config.accessToken || ""), config.accessToken || "");
  setAppClientCache(client, config);

  return client;
}

export function getAppClient(): SdkworkAppClient {
  const cachedClient = getAppClientCache<SdkworkAppClient>();
  if (cachedClient) {
    return cachedClient;
  }

  return initAppClient();
}

export function getAppClientConfig(): PcReactAppClientConfig | null {
  return getAppClientConfigCache<PcReactAppClientConfig>();
}

export function resolveAppClientAccessToken(): string {
  const sessionAccessToken = normalizeBearerToken(readPcReactRuntimeSession().accessToken);
  if (sessionAccessToken) {
    return sessionAccessToken;
  }

  const configuredAccessToken = normalizeBearerToken(getAppClientConfig()?.accessToken);
  if (configuredAccessToken) {
    return configuredAccessToken;
  }

  return normalizeBearerToken(getPcReactEnv().auth.accessToken);
}

export function createScopedAppClient(overrides: Partial<SdkworkAppConfig> = {}): SdkworkAppClient {
  const config = createAppClientBootstrapConfig(overrides);
  const client = decorateAppClientCompatAliases(createClient(config));
  applySessionTokensToAppClient(client, resolveEffectiveClientSession(overrides, config.accessToken || ""), config.accessToken || "");
  return client;
}

export function getAppClientWithSession(overrides: Partial<SdkworkAppConfig> = {}): SdkworkAppClient {
  if (Object.keys(overrides).length > 0) {
    return createScopedAppClient(overrides);
  }

  const client = getAppClient();
  const config = getAppClientConfig() || createAppClientBootstrapConfig();
  applySessionTokensToAppClient(client, readPcReactRuntimeSession(), config.accessToken || "");
  return client;
}

export function applyRuntimeSessionToAppClient(session: PcReactRuntimeSession = readPcReactRuntimeSession()): void {
  const client = getAppClientCache<SdkworkAppClient>();
  const config = getAppClientConfig();
  if (!client || !config) {
    return;
  }

  applySessionTokensToAppClient(client, session, config.accessToken || "");
}

export function applyAppClientSessionTokens(tokens: Pick<PcReactRuntimeSession, "authToken" | "accessToken">): void {
  const client = getAppClient();
  client.setAuthToken(normalizeBearerToken(tokens.authToken));
  client.setAccessToken(normalizeBearerToken(tokens.accessToken || resolveAppClientAccessToken()));
}
