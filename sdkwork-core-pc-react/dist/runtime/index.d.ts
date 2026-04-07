import { ConfigurePcReactRuntimeOptions, PcReactRuntimeSession } from '../internal/contracts';
import { getImConnectionState, getPcReactEnv, getPcReactRuntimeVersion, SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY, SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY, SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY, subscribeImConnectionState, subscribePcReactRuntime } from '../internal/runtimeState';
export declare function configurePcReactRuntime(options?: ConfigurePcReactRuntimeOptions): ConfigurePcReactRuntimeOptions;
export declare function resetPcReactRuntime(options?: {
    clearStorage?: boolean;
    clearConfiguration?: boolean;
}): void;
export declare function persistRuntimeSession(session: PcReactRuntimeSession): PcReactRuntimeSession;
export declare const persistPcReactRuntimeSession: typeof persistRuntimeSession;
export declare function readRuntimeSession(): PcReactRuntimeSession;
export declare const readPcReactRuntimeSession: typeof readRuntimeSession;
export declare function clearPcReactRuntimeSession(): Promise<void>;
export declare const SDKWORK_PC_REACT_LEGACY_STORAGE_KEYS: {
    readonly authToken: "sdkwork_token";
    readonly accessToken: "sdkwork_access_token";
    readonly refreshToken: "sdkwork_refresh_token";
};
export { getImConnectionState, getPcReactEnv, getPcReactRuntimeVersion, SDKWORK_PC_REACT_LEGACY_ACCESS_TOKEN_STORAGE_KEY, SDKWORK_PC_REACT_LEGACY_AUTH_TOKEN_STORAGE_KEY, SDKWORK_PC_REACT_LEGACY_REFRESH_TOKEN_STORAGE_KEY, subscribeImConnectionState, subscribePcReactRuntime };
//# sourceMappingURL=index.d.ts.map