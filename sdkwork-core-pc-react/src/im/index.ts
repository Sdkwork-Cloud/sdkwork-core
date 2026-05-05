import {
  ImSdkClient,
  type ImConnectOptions,
  type ImLiveConnection,
  type ImLiveState,
  type ImTokenProvider
} from "@sdkwork/im-sdk";
import { createPcReactEnvConfig } from "../env/index";
import { applyRuntimeSessionToAppClient } from "../app/index";
import type {
  PcImSessionIdentity,
  PcReactEnvSource,
  PcReactImClientConfig,
  PcReactImTransportConfig,
  PcReactRuntimeSession
} from "../internal/contracts";
import { normalizeBearerToken, resolveAuthMode } from "../internal/helpers";
import {
  bindImConnectionState,
  getImClientCache,
  getImConnectionState,
  getImSessionIdentity,
  getImTransportClientCache,
  getImTransportConfigCache,
  getPcReactEnv,
  getRuntimeOptions,
  persistImSessionIdentity,
  persistPcReactRuntimeSession,
  readPcReactRuntimeSession,
  resolveRuntimeHeaders,
  setImConnectionState,
  setImClientCache,
  setImTransportClientCache,
  subscribeImConnectionState
} from "../internal/runtimeState";

interface LegacyRealtimeSession {
  deviceId?: string;
  token?: string;
  uid?: string;
  wsUrl?: string;
}

export interface SyncImClientSessionOptions {
  bootstrapRealtime?: boolean;
  realtimeSession?: ImConnectOptions | LegacyRealtimeSession;
}

type ImTokenSnapshot = ReturnType<ImTokenProvider["getTokens"]>;

let activeImLiveConnection: ImLiveConnection | null = null;

function createPcReactImTokenProvider(initialTokens: Partial<ImTokenSnapshot> = {}): ImTokenProvider {
  let tokens: ImTokenSnapshot = {
    ...initialTokens,
    accessToken: normalizeBearerToken(initialTokens.accessToken),
    authToken: normalizeBearerToken(initialTokens.authToken),
    refreshToken: initialTokens.refreshToken?.trim() || undefined
  };

  const isExpired = () => typeof tokens.expiresAt === "number" && Date.now() >= tokens.expiresAt;

  return {
    getAccessToken: () => tokens.accessToken,
    getAuthToken: () => tokens.authToken,
    getRefreshToken: () => tokens.refreshToken,
    getTokens: () => ({ ...tokens }),
    setTokens: (nextTokens: ImTokenSnapshot) => {
      tokens = {
        ...nextTokens,
        accessToken: normalizeBearerToken(nextTokens.accessToken),
        authToken: normalizeBearerToken(nextTokens.authToken),
        refreshToken: nextTokens.refreshToken?.trim() || undefined
      };
    },
    setAccessToken: (token: string) => {
      tokens.accessToken = normalizeBearerToken(token) || undefined;
    },
    setAuthToken: (token: string) => {
      tokens.authToken = normalizeBearerToken(token) || undefined;
    },
    setRefreshToken: (token: string) => {
      tokens.refreshToken = token.trim() || undefined;
    },
    clearTokens: () => {
      tokens = {};
    },
    clearAuthToken: () => {
      tokens.authToken = undefined;
    },
    clearAccessToken: () => {
      tokens.accessToken = undefined;
    },
    isExpired,
    isValid: () => !!(tokens.accessToken || tokens.authToken) && !isExpired(),
    hasToken: () => !!(tokens.accessToken || tokens.authToken),
    hasAuthToken: () => !!tokens.authToken,
    hasAccessToken: () => !!tokens.accessToken,
    willExpireIn: (seconds: number) => typeof tokens.expiresAt === "number" && Date.now() + seconds * 1000 >= tokens.expiresAt
  };
}

function mergeImClientOverrides(overrides: Partial<PcReactImTransportConfig> = {}): Partial<PcReactImTransportConfig> {
  const runtimeOptions = getRuntimeOptions();

  return {
    ...(runtimeOptions.imConfigOverrides ?? {}),
    ...overrides
  };
}

function applySessionTokensToTokenProvider(
  tokenProvider: ImTokenProvider | undefined,
  session: PcReactRuntimeSession,
  fallbackAccessToken: string
): void {
  if (!tokenProvider) {
    return;
  }

  tokenProvider.setAccessToken(normalizeBearerToken(session.accessToken || fallbackAccessToken));
  tokenProvider.setAuthToken(normalizeBearerToken(session.authToken));
  if (session.refreshToken !== undefined) {
    tokenProvider.setRefreshToken(session.refreshToken || "");
  }
}

function resolveEffectiveClientSession(
  overrides: Partial<PcReactImTransportConfig>,
  fallbackAccessToken: string
): PcReactRuntimeSession {
  const session = readPcReactRuntimeSession();
  const mergedOverrides = mergeImClientOverrides(overrides);

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

function applySessionTokensToImRuntime(
  runtime: ImSdkClient,
  config: PcReactImTransportConfig,
  session: PcReactRuntimeSession,
  fallbackAccessToken: string
): void {
  applySessionTokensToTokenProvider(config.tokenManager, session, fallbackAccessToken);

  const normalizedAuthToken = normalizeBearerToken(session.authToken || config.authToken || config.apiKey);
  if (normalizedAuthToken) {
    runtime.auth.useToken(normalizedAuthToken);
    return;
  }

  runtime.auth.clearToken();
}

function createImSessionBridgeConfig(overrides: Partial<PcReactImTransportConfig> = {}): PcReactImClientConfig {
  const baseConfig = createResolvedImClientConfig(overrides, {
    includeRuntimeSession: false
  });
  const effectiveSession = resolveEffectiveClientSession(overrides, baseConfig.accessToken || "");
  const authToken = normalizeBearerToken(overrides.authToken || effectiveSession.authToken || baseConfig.authToken);
  const accessToken = normalizeBearerToken(effectiveSession.accessToken || baseConfig.accessToken);
  const tokenManager =
    overrides.tokenManager ??
    createPcReactImTokenProvider({
      accessToken,
      authToken: authToken || normalizeBearerToken(baseConfig.apiKey),
      refreshToken: effectiveSession.refreshToken
    });

  return {
    ...baseConfig,
    authToken: authToken || undefined,
    accessToken: accessToken || undefined,
    tokenManager,
    authMode: resolveAuthMode(
      baseConfig.apiKey,
      accessToken,
      authToken,
      baseConfig.authMode
    )
  };
}

function createResolvedImClientConfig(
  overrides: Partial<PcReactImTransportConfig> = {},
  options: {
    includeRuntimeSession: boolean;
  } = {
    includeRuntimeSession: true
  }
): PcReactImClientConfig {
  const env = getPcReactEnv();
  const session = options.includeRuntimeSession ? readPcReactRuntimeSession() : undefined;
  const mergedOverrides = mergeImClientOverrides(overrides);
  const resolvedAccessToken = normalizeBearerToken(
    mergedOverrides.accessToken || session?.accessToken || env.auth.accessToken
  );
  const resolvedApiKey = (mergedOverrides.apiKey || env.auth.apiKey || "").trim();
  const resolvedAuthToken = normalizeBearerToken(mergedOverrides.authToken || session?.authToken);
  const tokenManager =
    mergedOverrides.tokenManager ??
    createPcReactImTokenProvider({
      accessToken: resolvedAccessToken,
      authToken: resolvedAuthToken || normalizeBearerToken(resolvedApiKey),
      refreshToken: session?.refreshToken
    });

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
    tokenManager,
    authMode: resolveAuthMode(
      resolvedApiKey,
      resolvedAccessToken,
      resolvedAuthToken,
      mergedOverrides.authMode
    ),
    websocketBaseUrl: mergedOverrides.websocketBaseUrl || env.realtime.imWsUrl || undefined,
    headers: {
      ...resolveRuntimeHeaders("im", {
        ...(session ?? {}),
        authToken: resolvedAuthToken || undefined,
        accessToken: resolvedAccessToken || undefined
      }),
      ...(mergedOverrides.headers ?? {})
    }
  };
}

function createImSdkClient(config: PcReactImClientConfig): ImSdkClient {
  const options = {
    baseUrl: config.baseUrl,
    apiBaseUrl: config.baseUrl,
    websocketBaseUrl: config.websocketBaseUrl,
    authToken: normalizeBearerToken(config.authToken || config.apiKey),
    tokenProvider: config.tokenManager,
    timeout: config.timeout,
    headers: config.headers
  } as ConstructorParameters<typeof ImSdkClient>[0] & {
    headers?: Record<string, string>;
    timeout?: number;
  };

  return new ImSdkClient(options);
}

function normalizeRealtimeConnectOptions(
  realtimeSession: SyncImClientSessionOptions["realtimeSession"],
  identity: PcImSessionIdentity
): ImConnectOptions {
  if (!realtimeSession) {
    return {
      deviceId: identity.userId
    };
  }

  if ("wsUrl" in realtimeSession || "token" in realtimeSession || "uid" in realtimeSession) {
    const headers = realtimeSession.token
      ? {
          Authorization: `Bearer ${normalizeBearerToken(realtimeSession.token)}`
        }
      : undefined;

    return {
      deviceId: realtimeSession.deviceId || realtimeSession.uid || identity.userId,
      url: realtimeSession.wsUrl,
      headers
    };
  }

  return realtimeSession;
}

export function createImRuntimeConfigFromEnv(
  envSource: PcReactEnvSource,
  overrides: Partial<PcReactImTransportConfig> = {}
): Pick<
  PcReactImClientConfig,
  "baseUrl" | "timeout" | "apiKey" | "accessToken" | "tenantId" | "organizationId" | "platform" | "websocketBaseUrl"
> {
  const env = createPcReactEnvConfig(envSource);
  const resolvedAccessToken = normalizeBearerToken(overrides.accessToken || env.auth.accessToken);
  const resolvedApiKey = (overrides.apiKey || env.auth.apiKey || "").trim();
  const resolvedTenantId = (overrides.tenantId ?? env.owner.tenantId) || undefined;
  const resolvedOrganizationId = (overrides.organizationId ?? env.owner.organizationId) || undefined;
  const resolvedPlatform = overrides.platform ?? env.platform.id;
  const websocketBaseUrl = overrides.websocketBaseUrl || env.realtime.imWsUrl || undefined;

  return {
    baseUrl: overrides.baseUrl || env.api.baseUrl,
    timeout: overrides.timeout ?? env.api.timeout,
    ...(resolvedApiKey ? { apiKey: resolvedApiKey } : {}),
    ...(resolvedAccessToken ? { accessToken: resolvedAccessToken } : {}),
    ...(resolvedTenantId ? { tenantId: resolvedTenantId } : {}),
    ...(resolvedOrganizationId ? { organizationId: resolvedOrganizationId } : {}),
    ...(resolvedPlatform ? { platform: resolvedPlatform } : {}),
    ...(websocketBaseUrl ? { websocketBaseUrl } : {})
  };
}

export function createImClientConfig(overrides: Partial<PcReactImTransportConfig> = {}): PcReactImClientConfig {
  return createResolvedImClientConfig(overrides, {
    includeRuntimeSession: true
  });
}

function createImTransportClientConfig(overrides: Partial<PcReactImTransportConfig> = {}): PcReactImClientConfig {
  return createResolvedImClientConfig(overrides, {
    includeRuntimeSession: false
  });
}

export function initImClient(overrides: Partial<PcReactImTransportConfig> = {}): ImSdkClient {
  const config = createImSessionBridgeConfig(overrides);
  const cachedConfig = {
    ...createImTransportClientConfig(overrides),
    tokenManager: config.tokenManager
  };
  const runtime = createImSdkClient(config);
  applySessionTokensToImRuntime(runtime, cachedConfig, readPcReactRuntimeSession(), cachedConfig.accessToken || "");
  setImTransportClientCache(runtime, cachedConfig);
  setImClientCache(runtime);

  return runtime;
}

export function getImClient(): ImSdkClient {
  const cachedRuntime = getImClientCache<ImSdkClient>();
  if (cachedRuntime) {
    return cachedRuntime;
  }

  return initImClient();
}

export function initImTransportClient(overrides: Partial<PcReactImTransportConfig> = {}): ImSdkClient {
  const cachedRuntime = getImClientCache<ImSdkClient>();
  if (cachedRuntime) {
    return cachedRuntime;
  }

  const config = createImTransportClientConfig(overrides);
  const runtime = createImSdkClient(config);
  applySessionTokensToImRuntime(runtime, config, resolveEffectiveClientSession(overrides, config.accessToken || ""), config.accessToken || "");
  setImTransportClientCache(runtime, config);
  setImClientCache(runtime);

  return runtime;
}

export function getImTransportClient(): ImSdkClient {
  const cachedClient = getImTransportClientCache<ImSdkClient>();
  if (cachedClient) {
    return cachedClient;
  }

  return initImTransportClient();
}

export function getImTransportClientConfig(): PcReactImClientConfig | null {
  return getImTransportConfigCache<PcReactImClientConfig>();
}

export const initImBackendClient = initImTransportClient;
export const getImBackendClient = getImTransportClient;
export const getImBackendClientConfig = getImTransportClientConfig;

export async function syncImClientSession(
  identity: PcImSessionIdentity,
  options: SyncImClientSessionOptions = {}
): Promise<PcImSessionIdentity> {
  const normalizedIdentity: PcImSessionIdentity = {
    userId: (identity.userId || "").trim(),
    username: (identity.username || "").trim(),
    displayName: (identity.displayName || "").trim(),
    authToken: normalizeBearerToken(identity.authToken),
    ...(normalizeBearerToken(identity.accessToken) ? { accessToken: normalizeBearerToken(identity.accessToken) } : {}),
    ...(identity.refreshToken?.trim() ? { refreshToken: identity.refreshToken.trim() } : {})
  };

  if (!normalizedIdentity.authToken) {
    throw new Error("IM auth token is required");
  }

  if (!normalizedIdentity.userId) {
    throw new Error("IM user id is required");
  }

  if (!normalizedIdentity.username) {
    throw new Error("IM username is required");
  }

  const nextRuntimeSession = persistPcReactRuntimeSession({
    authToken: normalizedIdentity.authToken,
    accessToken: normalizedIdentity.accessToken,
    refreshToken: normalizedIdentity.refreshToken
  });
  applyRuntimeSessionToAppClient(nextRuntimeSession);

  const runtime = getImClient();
  const config = getImTransportClientConfig() || createImClientConfig();
  applySessionTokensToImRuntime(runtime, config, nextRuntimeSession, config.accessToken || getPcReactEnv().auth.accessToken || "");

  if (options.bootstrapRealtime !== false) {
    activeImLiveConnection?.disconnect(1000, "reconnect");
    activeImLiveConnection = await runtime.connect(normalizeRealtimeConnectOptions(options.realtimeSession, normalizedIdentity));
    bindImConnectionState(activeImLiveConnection);
  }

  persistImSessionIdentity(normalizedIdentity);
  return normalizedIdentity;
}

export async function clearImClientSession(): Promise<void> {
  activeImLiveConnection?.disconnect(1000, "logout");
  activeImLiveConnection = null;

  const runtime = getImClientCache<ImSdkClient>();
  const config = getImTransportConfigCache<PcReactImClientConfig>();
  if (runtime && config) {
    applySessionTokensToImRuntime(
      runtime,
      config,
      {
        authToken: "",
        accessToken: config.accessToken || getPcReactEnv().auth.accessToken || ""
      },
      config.accessToken || getPcReactEnv().auth.accessToken || ""
    );
  }

  persistImSessionIdentity(null);
  setImConnectionState("idle");
}

export function applyRuntimeSessionToImClient(session: PcReactRuntimeSession = readPcReactRuntimeSession()): void {
  const runtime = getImClientCache<ImSdkClient>();
  const config = getImTransportConfigCache<PcReactImClientConfig>();
  if (runtime && config) {
    applySessionTokensToImRuntime(runtime, config, session, config.accessToken || "");
  }
}

export {
  getImConnectionState,
  getImSessionIdentity,
  subscribeImConnectionState
};

export type { ImLiveConnection, ImLiveState };
