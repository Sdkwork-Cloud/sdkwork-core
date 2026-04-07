import {
  createClient,
  type SdkworkBackendClient,
  type SdkworkBackendConfig
} from "@sdkwork/im-backend-sdk";
import {
  OpenChatImSdk,
  type OpenChatBackendClientLike,
  type OpenChatConnectionState,
  type OpenChatRealtimeSession
} from "@openchat/sdkwork-im-sdk";
import { OpenChatWukongimAdapter } from "@openchat/sdkwork-im-wukongim-adapter";
import { createPcReactEnvConfig } from "../env/index";
import { applyRuntimeSessionToAppClient } from "../app/index";
import type { PcImSessionIdentity, PcReactEnvSource, PcReactImClientConfig, PcReactRuntimeSession } from "../internal/contracts";
import { normalizeBearerToken, resolveAuthMode } from "../internal/helpers";
import {
  bindImConnectionState,
  getImBackendClientCache,
  getImBackendConfigCache,
  getImClientCache,
  getImConnectionState,
  getImSessionIdentity,
  getPcReactEnv,
  getRuntimeOptions,
  persistImSessionIdentity,
  persistPcReactRuntimeSession,
  readPcReactRuntimeSession,
  resolveRuntimeHeaders,
  setImConnectionState,
  setImBackendClientCache,
  setImClientCache,
  subscribeImConnectionState
} from "../internal/runtimeState";

export interface SyncImClientSessionOptions {
  bootstrapRealtime?: boolean;
  realtimeSession?: OpenChatRealtimeSession;
}

function mergeImClientOverrides(overrides: Partial<SdkworkBackendConfig> = {}): Partial<SdkworkBackendConfig> {
  const runtimeOptions = getRuntimeOptions();

  return {
    ...(runtimeOptions.imConfigOverrides ?? {}),
    ...overrides
  };
}

function applySessionTokensToBackendClient(
  client: SdkworkBackendClient,
  session: PcReactRuntimeSession,
  fallbackAccessToken: string
): void {
  client.setAuthToken(normalizeBearerToken(session.authToken));
  client.setAccessToken(normalizeBearerToken(session.accessToken || fallbackAccessToken));
}

function resolveEffectiveClientSession(
  overrides: Partial<SdkworkBackendConfig>,
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

function applySessionTokensToImRuntime(runtime: OpenChatImSdk, authToken?: string): void {
  const normalizedAuthToken = normalizeBearerToken(authToken);
  runtime.session.setAuthToken(normalizedAuthToken);
}

function createImSessionBridgeConfig(overrides: Partial<SdkworkBackendConfig> = {}): SdkworkBackendConfig {
  const baseConfig = createResolvedImClientConfig(overrides, {
    includeRuntimeSession: false
  });
  const effectiveSession = resolveEffectiveClientSession(overrides, baseConfig.accessToken || "");
  const authToken = normalizeBearerToken(overrides.authToken || effectiveSession.authToken);
  const bridgeAccessToken = authToken || normalizeBearerToken(baseConfig.accessToken);

  return {
    ...baseConfig,
    authToken: authToken || undefined,
    accessToken: bridgeAccessToken || undefined,
    authMode: resolveAuthMode(
      baseConfig.apiKey,
      bridgeAccessToken,
      authToken,
      baseConfig.authMode
    )
  };
}

function createResolvedImClientConfig(
  overrides: Partial<SdkworkBackendConfig> = {},
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
      ...resolveRuntimeHeaders("im", {
        ...(session ?? {}),
        authToken: resolvedAuthToken || undefined,
        accessToken: resolvedAccessToken || undefined
      }),
      ...(mergedOverrides.headers ?? {})
    }
  };
}

export function createImRuntimeConfigFromEnv(
  envSource: PcReactEnvSource,
  overrides: Partial<SdkworkBackendConfig> = {}
): Pick<
  PcReactImClientConfig,
  "baseUrl" | "timeout" | "apiKey" | "accessToken" | "tenantId" | "organizationId" | "platform"
> {
  const env = createPcReactEnvConfig(envSource);
  const resolvedAccessToken = normalizeBearerToken(overrides.accessToken || env.auth.accessToken);
  const resolvedApiKey = (overrides.apiKey || env.auth.apiKey || "").trim();
  const resolvedTenantId = (overrides.tenantId ?? env.owner.tenantId) || undefined;
  const resolvedOrganizationId = (overrides.organizationId ?? env.owner.organizationId) || undefined;
  const resolvedPlatform = overrides.platform ?? env.platform.id;

  return {
    baseUrl: overrides.baseUrl || env.api.baseUrl,
    timeout: overrides.timeout ?? env.api.timeout,
    ...(resolvedApiKey ? { apiKey: resolvedApiKey } : {}),
    ...(resolvedAccessToken ? { accessToken: resolvedAccessToken } : {}),
    ...(resolvedTenantId ? { tenantId: resolvedTenantId } : {}),
    ...(resolvedOrganizationId ? { organizationId: resolvedOrganizationId } : {}),
    ...(resolvedPlatform ? { platform: resolvedPlatform } : {})
  };
}

export function createImClientConfig(overrides: Partial<SdkworkBackendConfig> = {}): PcReactImClientConfig {
  return createResolvedImClientConfig(overrides, {
    includeRuntimeSession: true
  });
}

function createImBackendClientConfig(overrides: Partial<SdkworkBackendConfig> = {}): PcReactImClientConfig {
  return createResolvedImClientConfig(overrides, {
    includeRuntimeSession: false
  });
}

export function initImBackendClient(overrides: Partial<SdkworkBackendConfig> = {}): SdkworkBackendClient {
  const config = createImBackendClientConfig(overrides);
  const client = createClient(config);
  applySessionTokensToBackendClient(client, resolveEffectiveClientSession(overrides, config.accessToken || ""), config.accessToken || "");
  setImBackendClientCache(client, config);

  return client;
}

export function getImBackendClient(): SdkworkBackendClient {
  const cachedClient = getImBackendClientCache<SdkworkBackendClient>();
  if (cachedClient) {
    return cachedClient;
  }

  return initImBackendClient();
}

export function getImBackendClientConfig(): PcReactImClientConfig | null {
  return getImBackendConfigCache<PcReactImClientConfig>();
}

export function initImClient(overrides: Partial<SdkworkBackendConfig> = {}): OpenChatImSdk {
  const sessionBackendClient = createClient(createImSessionBridgeConfig(overrides));
  const runtime = new OpenChatImSdk({
    backendClient: sessionBackendClient as unknown as OpenChatBackendClientLike,
    realtimeAdapter: new OpenChatWukongimAdapter()
  });
  applySessionTokensToImRuntime(runtime, readPcReactRuntimeSession().authToken);
  setImClientCache(runtime);
  bindImConnectionState(runtime as unknown as { realtime?: { onConnectionStateChange?: (listener: (state: string) => void) => () => void } });

  return runtime;
}

export function getImClient(): OpenChatImSdk {
  const cachedRuntime = getImClientCache<OpenChatImSdk>();
  if (cachedRuntime) {
    return cachedRuntime;
  }

  return initImClient();
}

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

  const backendClient = getImBackendClient();
  const backendConfig = getImBackendClientConfig() || createImClientConfig();
  backendClient.setAuthToken(normalizedIdentity.authToken);
  backendClient.setAccessToken(nextRuntimeSession.accessToken || backendConfig.accessToken || getPcReactEnv().auth.accessToken || "");

  const runtime = getImClient();
  applySessionTokensToImRuntime(runtime, normalizedIdentity.authToken);

  if (options.bootstrapRealtime !== false) {
    await runtime.session.connectRealtime(options.realtimeSession);
  }

  persistImSessionIdentity(normalizedIdentity);
  return normalizedIdentity;
}

export async function clearImClientSession(): Promise<void> {
  const runtime = getImClientCache<OpenChatImSdk>();
  if (runtime) {
    try {
      await runtime.session.disconnectRealtime();
    } catch {
      // keep local cleanup authoritative
    }

    applySessionTokensToImRuntime(runtime, "");
  }

  const backendClient = getImBackendClientCache<SdkworkBackendClient>();
  const backendConfig = getImBackendClientConfig();
  if (backendClient) {
    backendClient.setAuthToken("");
    backendClient.setAccessToken(backendConfig?.accessToken || getPcReactEnv().auth.accessToken || "");
  }

  persistImSessionIdentity(null);
  setImConnectionState("idle");
}

export function applyRuntimeSessionToImClient(session: PcReactRuntimeSession = readPcReactRuntimeSession()): void {
  const backendClient = getImBackendClientCache<SdkworkBackendClient>();
  const backendConfig = getImBackendClientConfig();
  if (backendClient && backendConfig) {
    applySessionTokensToBackendClient(backendClient, session, backendConfig.accessToken || "");
  }

  const runtime = getImClientCache<OpenChatImSdk>();
  if (runtime) {
    applySessionTokensToImRuntime(runtime, session.authToken);
  }
}

export {
  getImConnectionState,
  getImSessionIdentity,
  subscribeImConnectionState
};

export type { OpenChatConnectionState };
