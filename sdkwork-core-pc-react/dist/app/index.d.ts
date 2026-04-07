import { SdkworkAppClient, SdkworkAppConfig } from '@sdkwork/app-sdk';
import { PcReactAppClientConfig, PcReactEnvSource, PcReactRuntimeSession } from '../internal/contracts';
export declare const SDKWORK_PC_REACT_DEFAULT_APP_CLIENT_COMPAT_ALIASES: {
    readonly analytics: "analytic";
    readonly assets: "asset";
    readonly coupons: "coupon";
    readonly notes: "note";
    readonly orders: "order";
    readonly payments: "payment";
    readonly projects: "project";
    readonly settings: "setting";
    readonly workspaces: "workspace";
};
export declare function decorateAppClientCompatAliases<TClient extends SdkworkAppClient>(client: TClient, aliases?: Record<string, string>): TClient;
export declare function createAppClientConfigFromEnv(envSource: PcReactEnvSource, overrides?: Partial<SdkworkAppConfig>): PcReactAppClientConfig;
export declare function resolveAppClientAccessTokenFromEnv(envSource: PcReactEnvSource): string;
export declare function createAppClientConfig(overrides?: Partial<SdkworkAppConfig>): PcReactAppClientConfig;
export declare function initAppClient(overrides?: Partial<SdkworkAppConfig>): SdkworkAppClient;
export declare function getAppClient(): SdkworkAppClient;
export declare function getAppClientConfig(): PcReactAppClientConfig | null;
export declare function resolveAppClientAccessToken(): string;
export declare function createScopedAppClient(overrides?: Partial<SdkworkAppConfig>): SdkworkAppClient;
export declare function getAppClientWithSession(overrides?: Partial<SdkworkAppConfig>): SdkworkAppClient;
export declare function applyRuntimeSessionToAppClient(session?: PcReactRuntimeSession): void;
export declare function applyAppClientSessionTokens(tokens: Pick<PcReactRuntimeSession, "authToken" | "accessToken">): void;
//# sourceMappingURL=index.d.ts.map