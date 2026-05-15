import type { SdkworkAppConfig } from "@sdkwork/app-sdk";
import type {
  ConfigurePcReactRuntimeOptions,
  PcImSessionIdentity,
  PcReactEnvConfig,
  PcReactLegacyStorageKeys,
  PcReactImTransportConfig,
  PcReactPreferenceOptions,
  PcReactRuntimeClientTarget,
  PcReactRuntimeSession,
  PcReactRealtimeState,
  PcReactStorageAdapter
} from "./contracts";
import {
  createPcReactEnvConfig,
  readPcReactEnvSource,
  readPcReactNamedGlobalEnvSources,
} from "../env/index";
import { cloneJsonValue, normalizeBearerToken, safeParseJson, safeStringifyJson } from "./helpers";

const AUTH_TOKEN_STORAGE_KEY = "sdkwork.core.pc-react.auth-token";
const ACCESS_TOKEN_STORAGE_KEY = "sdkwork.core.pc-react.access-token";
const REFRESH_TOKEN_STORAGE_KEY = "sdkwork.core.pc-react.refresh-token";
const IM_SESSION_STORAGE_KEY = "sdkwork.core.pc-react.im-session";

export const SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY = "sdkwork_token";
export const SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY = "sdkwork_access_token";
export const SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY = "sdkwork_refresh_token";

const DEFAULT_LEGACY_STORAGE_KEYS: Required<PcReactLegacyStorageKeys> = {
  authToken: [SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY],
  accessToken: [SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY],
  refreshToken: [SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY],
  runtimeSession: ["sdkwork-notes-auth-session", "sdkwork-drive-auth-session", "claw-studio-auth-session"],
  imSession: []
};

const memoryStorage = new Map<string, string>();

let runtimeOptions: ConfigurePcReactRuntimeOptions = {};
let cachedEnv: PcReactEnvConfig | null = null;
let appClientCache: unknown = null;
let appClientConfigCache: SdkworkAppConfig | null = null;
let imTransportClientCache: unknown = null;
let imTransportConfigCache: PcReactImTransportConfig | null = null;
let imClientCache: unknown = null;
let imSessionIdentityCache: PcImSessionIdentity | null = null;
let runtimeVersion = 0;
let imConnectionState = "idle";
let imConnectionUnsubscribe: (() => void) | null = null;

const runtimeListeners = new Set<() => void>();
const imConnectionListeners = new Set<(state: string) => void>();

function resolveBrowserStorage(): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function createMemoryStorageAdapter(): PcReactStorageAdapter {
  return {
    getItem(key) {
      return memoryStorage.get(key) ?? null;
    },
    setItem(key, value) {
      memoryStorage.set(key, value);
    },
    removeItem(key) {
      memoryStorage.delete(key);
    }
  };
}

function mergeUniqueValues(currentValues: string[] = [], nextValues: string[] = []): string[] {
  return Array.from(new Set([...currentValues, ...nextValues].filter((value) => value && value.trim())));
}

function mergeLegacyStorageKeys(
  current: PcReactLegacyStorageKeys | undefined,
  next: PcReactLegacyStorageKeys | undefined
): PcReactLegacyStorageKeys | undefined {
  if (!current && !next) {
    return undefined;
  }

  return {
    authToken: mergeUniqueValues(current?.authToken, next?.authToken),
    accessToken: mergeUniqueValues(current?.accessToken, next?.accessToken),
    refreshToken: mergeUniqueValues(current?.refreshToken, next?.refreshToken),
    runtimeSession: mergeUniqueValues(current?.runtimeSession, next?.runtimeSession),
    imSession: mergeUniqueValues(current?.imSession, next?.imSession)
  };
}

function mergePreferenceOptions(
  current: PcReactPreferenceOptions | undefined,
  next: PcReactPreferenceOptions | undefined,
): PcReactPreferenceOptions | undefined {
  if (!current && !next) {
    return undefined;
  }

  return {
    defaults: {
      ...(current?.defaults ?? {}),
      ...(next?.defaults ?? {}),
    },
    storageKey: next?.storageKey ?? current?.storageKey,
  };
}

function resolveLegacyStorageKeys(): Required<PcReactLegacyStorageKeys> {
  return {
    authToken: mergeUniqueValues(DEFAULT_LEGACY_STORAGE_KEYS.authToken, runtimeOptions.legacyStorageKeys?.authToken),
    accessToken: mergeUniqueValues(DEFAULT_LEGACY_STORAGE_KEYS.accessToken, runtimeOptions.legacyStorageKeys?.accessToken),
    refreshToken: mergeUniqueValues(DEFAULT_LEGACY_STORAGE_KEYS.refreshToken, runtimeOptions.legacyStorageKeys?.refreshToken),
    runtimeSession: mergeUniqueValues(DEFAULT_LEGACY_STORAGE_KEYS.runtimeSession, runtimeOptions.legacyStorageKeys?.runtimeSession),
    imSession: mergeUniqueValues(DEFAULT_LEGACY_STORAGE_KEYS.imSession, runtimeOptions.legacyStorageKeys?.imSession)
  };
}

function mergeRuntimeOptions(
  current: ConfigurePcReactRuntimeOptions,
  next: ConfigurePcReactRuntimeOptions
): ConfigurePcReactRuntimeOptions {
  return {
    envSource: next.envSource ? { ...(current.envSource ?? {}), ...next.envSource } : current.envSource,
    envGlobalKeys: next.envGlobalKeys ? mergeUniqueValues(current.envGlobalKeys, next.envGlobalKeys) : current.envGlobalKeys,
    storage: next.storage ?? current.storage,
    legacyStorageKeys: mergeLegacyStorageKeys(current.legacyStorageKeys, next.legacyStorageKeys),
    preferences: mergePreferenceOptions(current.preferences, next.preferences),
    appClientCompatAliases: {
      ...(current.appClientCompatAliases ?? {}),
      ...(next.appClientCompatAliases ?? {})
    },
    headersResolver: next.headersResolver ?? current.headersResolver,
    appConfigOverrides: {
      ...(current.appConfigOverrides ?? {}),
      ...(next.appConfigOverrides ?? {})
    },
    imConfigOverrides: {
      ...(current.imConfigOverrides ?? {}),
      ...(next.imConfigOverrides ?? {})
    }
  };
}

function emitRuntimeChange(): void {
  runtimeVersion += 1;
  for (const listener of runtimeListeners) {
    listener();
  }
}

function emitImConnectionState(state: string): void {
  imConnectionState = state;
  for (const listener of imConnectionListeners) {
    listener(state);
  }
  emitRuntimeChange();
}

function resolveEffectiveEnvSource() {
  return {
    ...readPcReactEnvSource(),
    ...readPcReactNamedGlobalEnvSources(runtimeOptions.envGlobalKeys ?? []),
    ...(runtimeOptions.envSource ?? {})
  };
}

function readStorageValue(key: string): string | undefined {
  try {
    return resolveStorageAdapter().getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
}

function readFirstStorageValue(keys: string[]): string | undefined {
  for (const key of keys) {
    const value = readStorageValue(key);
    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
}

function readLegacyRuntimeSession(): Pick<PcReactRuntimeSession, "authToken" | "accessToken" | "refreshToken"> {
  for (const key of resolveLegacyStorageKeys().runtimeSession) {
    const parsedSession = safeParseJson<Partial<PcReactRuntimeSession>>(readStorageValue(key));
    if (!parsedSession) {
      continue;
    }

    const authToken = normalizeBearerToken(parsedSession.authToken);
    const accessToken = normalizeBearerToken(parsedSession.accessToken);
    const refreshToken = typeof parsedSession.refreshToken === "string" ? parsedSession.refreshToken.trim() : "";

    if (!authToken && !accessToken && !refreshToken) {
      continue;
    }

    return {
      authToken: authToken || undefined,
      accessToken: accessToken || undefined,
      refreshToken: refreshToken || undefined
    };
  }

  return {};
}

function writeStorageValue(key: string, value?: string): void {
  try {
    if (value && value.trim()) {
      resolveStorageAdapter().setItem(key, value.trim());
      return;
    }

    resolveStorageAdapter().removeItem(key);
  } catch {
    // ignore storage write errors
  }
}

export function resolveStorageAdapter(): PcReactStorageAdapter {
  if (runtimeOptions.storage) {
    return runtimeOptions.storage;
  }

  const browserStorage = resolveBrowserStorage();
  if (browserStorage) {
    return browserStorage;
  }

  return createMemoryStorageAdapter();
}

export function getRuntimeOptions(): ConfigurePcReactRuntimeOptions {
  return runtimeOptions;
}

export function configureRuntime(options: ConfigurePcReactRuntimeOptions = {}): ConfigurePcReactRuntimeOptions {
  runtimeOptions = mergeRuntimeOptions(runtimeOptions, options);
  resetRuntimeCaches();
  emitRuntimeChange();
  return runtimeOptions;
}

export function subscribePcReactRuntime(listener: () => void): () => void {
  runtimeListeners.add(listener);
  return () => {
    runtimeListeners.delete(listener);
  };
}

export function getPcReactRuntimeVersion(): number {
  return runtimeVersion;
}

export function subscribeImConnectionState(listener: (state: string) => void): () => void {
  imConnectionListeners.add(listener);
  listener(imConnectionState);
  return () => {
    imConnectionListeners.delete(listener);
  };
}

export function getImConnectionState(): string {
  return imConnectionState;
}

export function setImConnectionState(state: string): void {
  emitImConnectionState(state);
}

export function bindImConnectionState(runtime: {
  lifecycle?: {
    onStateChange?: (listener: (state: PcReactRealtimeState) => void) => () => void;
  };
  realtime?: {
    onConnectionStateChange?: (listener: (state: string) => void) => () => void;
  };
}): void {
  imConnectionUnsubscribe?.();
  imConnectionUnsubscribe =
    runtime.lifecycle?.onStateChange?.((state) => {
      emitImConnectionState(typeof state === "string" ? state : state.status || "idle");
    }) ??
    runtime.realtime?.onConnectionStateChange?.((state) => {
      emitImConnectionState(state);
    }) ??
    null;
}

export function getPcReactEnv(): PcReactEnvConfig {
  if (!cachedEnv) {
    cachedEnv = createPcReactEnvConfig(resolveEffectiveEnvSource());
  }

  return cachedEnv;
}

export function resolveRuntimeHeaders(
  target: PcReactRuntimeClientTarget,
  session: PcReactRuntimeSession = readPcReactRuntimeSession()
): Record<string, string> {
  const standardHeaders: Record<string, string> = {};
  const authToken = normalizeBearerToken(session.authToken);
  const accessToken = normalizeBearerToken(session.accessToken);

  if (authToken) {
    standardHeaders.Authorization = `Bearer ${authToken}`;
  }

  if (accessToken) {
    standardHeaders["Sdkwork-Access-Token"] = accessToken;
  }

  const headers = runtimeOptions.headersResolver?.({
    env: getPcReactEnv(),
    session,
    target
  });

  if (!headers) {
    return standardHeaders;
  }

  return Object.entries(headers).reduce<Record<string, string>>((accumulator, [headerName, headerValue]) => {
    const normalizedValue = typeof headerValue === "string" ? headerValue.trim() : "";
    if (!headerName.trim() || !normalizedValue) {
      return accumulator;
    }

    accumulator[headerName] = normalizedValue;
    return accumulator;
  }, standardHeaders);
}

export function readPcReactRuntimeSession(): PcReactRuntimeSession {
  const env = getPcReactEnv();
  const legacyRuntimeSession = readLegacyRuntimeSession();
  const authToken = normalizeBearerToken(
    readStorageValue(AUTH_TOKEN_STORAGE_KEY) ||
      legacyRuntimeSession.authToken ||
      readFirstStorageValue(resolveLegacyStorageKeys().authToken)
  );
  const storedAccessToken = normalizeBearerToken(
    readStorageValue(ACCESS_TOKEN_STORAGE_KEY) ||
      legacyRuntimeSession.accessToken ||
      readFirstStorageValue(resolveLegacyStorageKeys().accessToken)
  );
  const configuredAccessToken = normalizeBearerToken(
    (appClientConfigCache?.accessToken as string | undefined) ||
      (imTransportConfigCache?.accessToken as string | undefined)
  );
  const refreshToken = (
    readStorageValue(REFRESH_TOKEN_STORAGE_KEY) ||
    legacyRuntimeSession.refreshToken ||
    readFirstStorageValue(resolveLegacyStorageKeys().refreshToken) ||
    ""
  ).trim();
  const storedImIdentity = safeParseJson<PcImSessionIdentity>(readStorageValue(IM_SESSION_STORAGE_KEY));

  if (!imSessionIdentityCache && storedImIdentity) {
    imSessionIdentityCache = storedImIdentity;
  }

  return {
    authToken: authToken || undefined,
    accessToken: storedAccessToken || configuredAccessToken || env.auth.accessToken || undefined,
    refreshToken: refreshToken || undefined,
    im: imSessionIdentityCache ? cloneJsonValue(imSessionIdentityCache) : undefined
  };
}

export function persistPcReactRuntimeSession(tokens: PcReactRuntimeSession): PcReactRuntimeSession {
  const current = readPcReactRuntimeSession();
  const env = getPcReactEnv();

  const nextAuthToken =
    tokens.authToken !== undefined ? normalizeBearerToken(tokens.authToken) : normalizeBearerToken(current.authToken);
  const nextAccessToken =
    tokens.accessToken !== undefined
      ? normalizeBearerToken(tokens.accessToken)
      : normalizeBearerToken(current.accessToken || env.auth.accessToken);
  const nextRefreshToken =
    tokens.refreshToken !== undefined ? (tokens.refreshToken || "").trim() : (current.refreshToken || "").trim();

  writeStorageValue(AUTH_TOKEN_STORAGE_KEY, nextAuthToken || undefined);

  if (tokens.accessToken === undefined) {
    const runtimeOverride = normalizeBearerToken(readStorageValue(ACCESS_TOKEN_STORAGE_KEY));
    writeStorageValue(ACCESS_TOKEN_STORAGE_KEY, runtimeOverride || undefined);
  } else if (!nextAccessToken || nextAccessToken === env.auth.accessToken) {
    writeStorageValue(ACCESS_TOKEN_STORAGE_KEY, undefined);
  } else {
    writeStorageValue(ACCESS_TOKEN_STORAGE_KEY, nextAccessToken);
  }

  writeStorageValue(REFRESH_TOKEN_STORAGE_KEY, nextRefreshToken || undefined);

  if (tokens.im) {
    persistImSessionIdentity(tokens.im);
  }

  emitRuntimeChange();

  return readPcReactRuntimeSession();
}

export function clearStoredPcReactRuntimeSession(): void {
  writeStorageValue(AUTH_TOKEN_STORAGE_KEY, undefined);
  writeStorageValue(ACCESS_TOKEN_STORAGE_KEY, undefined);
  writeStorageValue(REFRESH_TOKEN_STORAGE_KEY, undefined);
  writeStorageValue(IM_SESSION_STORAGE_KEY, undefined);
  for (const key of [
    ...resolveLegacyStorageKeys().authToken,
    ...resolveLegacyStorageKeys().accessToken,
    ...resolveLegacyStorageKeys().refreshToken,
    ...resolveLegacyStorageKeys().runtimeSession,
    ...resolveLegacyStorageKeys().imSession
  ]) {
    writeStorageValue(key, undefined);
  }
  imSessionIdentityCache = null;
  emitRuntimeChange();
}

export function persistImSessionIdentity(identity: PcImSessionIdentity | null): void {
  imSessionIdentityCache = identity ? cloneJsonValue(identity) : null;

  if (identity) {
    writeStorageValue(IM_SESSION_STORAGE_KEY, safeStringifyJson(identity));
  } else {
    writeStorageValue(IM_SESSION_STORAGE_KEY, undefined);
  }

  emitRuntimeChange();
}

export function getImSessionIdentity(): PcImSessionIdentity | null {
  if (!imSessionIdentityCache) {
    imSessionIdentityCache = safeParseJson<PcImSessionIdentity>(readStorageValue(IM_SESSION_STORAGE_KEY));
  }

  return imSessionIdentityCache ? cloneJsonValue(imSessionIdentityCache) : null;
}

export function setAppClientCache(client: unknown, config: SdkworkAppConfig): void {
  appClientCache = client;
  appClientConfigCache = config;
}

export function getAppClientCache<T>(): T | null {
  return (appClientCache as T | null) ?? null;
}

export function getAppClientConfigCache<T extends SdkworkAppConfig>(): T | null {
  return (appClientConfigCache as T | null) ?? null;
}

export function setImTransportClientCache(client: unknown, config: PcReactImTransportConfig): void {
  imTransportClientCache = client;
  imTransportConfigCache = config;
}

export function getImTransportClientCache<T>(): T | null {
  return (imTransportClientCache as T | null) ?? null;
}

export function getImTransportConfigCache<T extends PcReactImTransportConfig>(): T | null {
  return (imTransportConfigCache as T | null) ?? null;
}

export function setImClientCache(client: unknown): void {
  imClientCache = client;
}

export function getImClientCache<T>(): T | null {
  return (imClientCache as T | null) ?? null;
}

export function resetRuntimeCaches(): void {
  cachedEnv = null;
  appClientCache = null;
  appClientConfigCache = null;
  imTransportClientCache = null;
  imTransportConfigCache = null;
  imClientCache = null;
  imSessionIdentityCache = null;
  imConnectionUnsubscribe?.();
  imConnectionUnsubscribe = null;
  emitImConnectionState("idle");
}

export function resetRuntime(options: { clearStorage?: boolean; clearConfiguration?: boolean } = {}): void {
  const { clearStorage = true, clearConfiguration = true } = options;

  if (clearStorage) {
    memoryStorage.clear();
    clearStoredPcReactRuntimeSession();
  }

  if (clearConfiguration) {
    runtimeOptions = {};
  }

  resetRuntimeCaches();
  emitRuntimeChange();
}
