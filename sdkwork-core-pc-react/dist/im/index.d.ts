import { SdkworkBackendClient, SdkworkBackendConfig } from '@sdkwork/im-backend-sdk';
import { OpenChatImSdk, OpenChatConnectionState, OpenChatRealtimeSession } from '@openchat/sdkwork-im-sdk';
import { PcImSessionIdentity, PcReactEnvSource, PcReactImClientConfig, PcReactRuntimeSession } from '../internal/contracts';
import { getImConnectionState, getImSessionIdentity, subscribeImConnectionState } from '../internal/runtimeState';
export interface SyncImClientSessionOptions {
    bootstrapRealtime?: boolean;
    realtimeSession?: OpenChatRealtimeSession;
}
export declare function createImRuntimeConfigFromEnv(envSource: PcReactEnvSource, overrides?: Partial<SdkworkBackendConfig>): Pick<PcReactImClientConfig, "baseUrl" | "timeout" | "apiKey" | "accessToken" | "tenantId" | "organizationId" | "platform">;
export declare function createImClientConfig(overrides?: Partial<SdkworkBackendConfig>): PcReactImClientConfig;
export declare function initImBackendClient(overrides?: Partial<SdkworkBackendConfig>): SdkworkBackendClient;
export declare function getImBackendClient(): SdkworkBackendClient;
export declare function getImBackendClientConfig(): PcReactImClientConfig | null;
export declare function initImClient(overrides?: Partial<SdkworkBackendConfig>): OpenChatImSdk;
export declare function getImClient(): OpenChatImSdk;
export declare function syncImClientSession(identity: PcImSessionIdentity, options?: SyncImClientSessionOptions): Promise<PcImSessionIdentity>;
export declare function clearImClientSession(): Promise<void>;
export declare function applyRuntimeSessionToImClient(session?: PcReactRuntimeSession): void;
export { getImConnectionState, getImSessionIdentity, subscribeImConnectionState };
export type { OpenChatConnectionState };
//# sourceMappingURL=index.d.ts.map