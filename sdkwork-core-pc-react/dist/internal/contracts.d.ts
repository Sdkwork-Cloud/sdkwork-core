import { SdkworkAppConfig } from '@sdkwork/app-sdk';
import { SdkworkBackendConfig } from '@sdkwork/im-backend-sdk';
export type PcReactRuntimeEnv = "development" | "test" | "staging" | "production";
export type PcReactOwnerMode = "root" | "tenant" | "organization";
export type PcReactAuthMode = "apikey" | "dual-token";
export interface PcReactEnvSource {
    [key: string]: string | boolean | undefined;
}
export interface OwnerScopedValue<T> {
    default?: T;
    root?: T;
    tenant?: T;
    organization?: T;
}
export interface PcReactEnvConfig {
    appEnv: PcReactRuntimeEnv;
    mode: PcReactRuntimeEnv;
    isDev: boolean;
    isTest: boolean;
    isStaging: boolean;
    isProduction: boolean;
    metadata: {
        name: string;
        version: string;
    };
    log: {
        debug: boolean;
        level: string;
    };
    owner: {
        mode: PcReactOwnerMode;
        tenantId: string;
        organizationId: string;
    };
    api: {
        baseUrl: string;
        baseUrls: OwnerScopedValue<string>;
        timeout: number;
    };
    auth: {
        apiKey: string;
        accessToken: string;
        accessTokens: OwnerScopedValue<string>;
        mode: PcReactAuthMode;
    };
    realtime: {
        imWsUrl: string;
    };
    update: {
        appId: number | null;
        releaseChannel: string;
        enableStartupCheck: boolean;
    };
    distribution: {
        id: "cn" | "global";
    };
    platform: {
        id: string;
        isDesktop: boolean;
        isTauri: boolean;
    };
    vite: {
        isDev: boolean;
        isProd: boolean;
    };
}
export interface PcReactStorageAdapter {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export interface PcReactLegacyStorageKeys {
    authToken?: string[];
    accessToken?: string[];
    refreshToken?: string[];
    runtimeSession?: string[];
    imSession?: string[];
}
export interface PcImSessionIdentity {
    userId: string;
    username: string;
    displayName: string;
    authToken: string;
    accessToken?: string;
    refreshToken?: string;
}
export interface PcReactRuntimeSession {
    authToken?: string;
    accessToken?: string;
    refreshToken?: string;
    im?: PcImSessionIdentity;
}
export type PcReactRuntimeClientTarget = "app" | "im";
export interface PcReactHeadersResolverContext {
    env: PcReactEnvConfig;
    session: PcReactRuntimeSession;
    target: PcReactRuntimeClientTarget;
}
export type PcReactHeadersResolver = (context: PcReactHeadersResolverContext) => Record<string, string | undefined> | undefined;
export interface ConfigurePcReactRuntimeOptions {
    envSource?: PcReactEnvSource;
    envGlobalKeys?: string[];
    storage?: PcReactStorageAdapter;
    legacyStorageKeys?: PcReactLegacyStorageKeys;
    appClientCompatAliases?: Record<string, string>;
    headersResolver?: PcReactHeadersResolver;
    appConfigOverrides?: Partial<SdkworkAppConfig>;
    imConfigOverrides?: Partial<SdkworkBackendConfig>;
}
export interface PcReactAppClientConfig extends SdkworkAppConfig {
    env: PcReactRuntimeEnv;
    ownerMode: PcReactOwnerMode;
}
export interface PcReactImClientConfig extends SdkworkBackendConfig {
    env: PcReactRuntimeEnv;
    ownerMode: PcReactOwnerMode;
}
//# sourceMappingURL=contracts.d.ts.map