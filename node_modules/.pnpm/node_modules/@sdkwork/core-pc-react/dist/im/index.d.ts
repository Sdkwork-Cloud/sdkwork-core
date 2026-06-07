import { PcImSessionIdentity, PcReactEnvSource, PcReactImClientConfig, PcReactImTransportConfig, PcReactRealtimeClient, PcReactRealtimeConnectOptions, PcReactRealtimeConnection, PcReactRuntimeSession } from '../internal/contracts';
import { getImConnectionState, getImSessionIdentity, subscribeImConnectionState } from '../internal/runtimeState';
interface LegacyRealtimeSession {
    deviceId?: string;
    token?: string;
    uid?: string;
    wsUrl?: string;
}
export interface SyncImClientSessionOptions {
    bootstrapRealtime?: boolean;
    realtimeSession?: PcReactRealtimeConnectOptions | LegacyRealtimeSession;
}
export declare function createImRuntimeConfigFromEnv(envSource: PcReactEnvSource, overrides?: Partial<PcReactImTransportConfig>): Pick<PcReactImClientConfig, "baseUrl" | "timeout" | "apiKey" | "accessToken" | "tenantId" | "organizationId" | "platform" | "websocketBaseUrl">;
export declare function createImClientConfig(overrides?: Partial<PcReactImTransportConfig>): PcReactImClientConfig;
export declare function initImClient(overrides?: Partial<PcReactImTransportConfig>): PcReactRealtimeClient;
export declare function getImClient(): PcReactRealtimeClient;
export declare function initImTransportClient(overrides?: Partial<PcReactImTransportConfig>): PcReactRealtimeClient;
export declare function getImTransportClient(): PcReactRealtimeClient;
export declare function getImTransportClientConfig(): PcReactImClientConfig | null;
export declare const initImBackendClient: typeof initImTransportClient;
export declare const getImBackendClient: typeof getImTransportClient;
export declare const getImBackendClientConfig: typeof getImTransportClientConfig;
export declare function syncImClientSession(identity: PcImSessionIdentity, options?: SyncImClientSessionOptions): Promise<PcImSessionIdentity>;
export declare function clearImClientSession(): Promise<void>;
export declare function applyRuntimeSessionToImClient(session?: PcReactRuntimeSession): void;
export { getImConnectionState, getImSessionIdentity, subscribeImConnectionState };
export type { PcReactRealtimeClient as ImLiveClient, PcReactRealtimeConnection as ImLiveConnection, PcReactRealtimeConnectOptions as ImConnectOptions };
//# sourceMappingURL=index.d.ts.map