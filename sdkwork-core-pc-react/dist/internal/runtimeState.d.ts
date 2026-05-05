import { SdkworkAppConfig } from '@sdkwork/app-sdk';
import { ConfigurePcReactRuntimeOptions, PcImSessionIdentity, PcReactEnvConfig, PcReactImTransportConfig, PcReactRuntimeClientTarget, PcReactRuntimeSession, PcReactStorageAdapter } from './contracts';
export declare const SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY = "sdkwork_token";
export declare const SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY = "sdkwork_access_token";
export declare const SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY = "sdkwork_refresh_token";
export declare function resolveStorageAdapter(): PcReactStorageAdapter;
export declare function getRuntimeOptions(): ConfigurePcReactRuntimeOptions;
export declare function configureRuntime(options?: ConfigurePcReactRuntimeOptions): ConfigurePcReactRuntimeOptions;
export declare function subscribePcReactRuntime(listener: () => void): () => void;
export declare function getPcReactRuntimeVersion(): number;
export declare function subscribeImConnectionState(listener: (state: string) => void): () => void;
export declare function getImConnectionState(): string;
export declare function setImConnectionState(state: string): void;
export declare function bindImConnectionState(runtime: {
    lifecycle?: {
        onStateChange?: (listener: (state: {
            status?: string;
        } | string) => void) => () => void;
    };
    realtime?: {
        onConnectionStateChange?: (listener: (state: string) => void) => () => void;
    };
}): void;
export declare function getPcReactEnv(): PcReactEnvConfig;
export declare function resolveRuntimeHeaders(target: PcReactRuntimeClientTarget, session?: PcReactRuntimeSession): Record<string, string>;
export declare function readPcReactRuntimeSession(): PcReactRuntimeSession;
export declare function persistPcReactRuntimeSession(tokens: PcReactRuntimeSession): PcReactRuntimeSession;
export declare function clearStoredPcReactRuntimeSession(): void;
export declare function persistImSessionIdentity(identity: PcImSessionIdentity | null): void;
export declare function getImSessionIdentity(): PcImSessionIdentity | null;
export declare function setAppClientCache(client: unknown, config: SdkworkAppConfig): void;
export declare function getAppClientCache<T>(): T | null;
export declare function getAppClientConfigCache<T extends SdkworkAppConfig>(): T | null;
export declare function setImTransportClientCache(client: unknown, config: PcReactImTransportConfig): void;
export declare function getImTransportClientCache<T>(): T | null;
export declare function getImTransportConfigCache<T extends PcReactImTransportConfig>(): T | null;
export declare function setImClientCache(client: unknown): void;
export declare function getImClientCache<T>(): T | null;
export declare function resetRuntimeCaches(): void;
export declare function resetRuntime(options?: {
    clearStorage?: boolean;
    clearConfiguration?: boolean;
}): void;
//# sourceMappingURL=runtimeState.d.ts.map