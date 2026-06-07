import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { OpenChatAgentCreateForm, OpenChatFileUploadSessionForm, OpenChatSearchForm, OpenChatSettingsUpdateForm, OpenChatUploadCompleteForm, PlusApiResultAgentVO, PlusApiResultCursorFeedVO, PlusApiResultFileUploadChunkVO, PlusApiResultFileUploadSessionVO, PlusApiResultFileVO, PlusApiResultListDeviceVO, PlusApiResultPageAgentVO, PlusApiResultPageAppVO, PlusApiResultPageMomentVO, PlusApiResultPageNotificationVO, PlusApiResultPageSearchItemVO, PlusApiResultPageSkillVO, PlusApiResultPageToolVO, PlusApiResultPageVideoVO, PlusApiResultPageWalletTransactionVO, PlusApiResultSettingsVO, PlusApiResultWalletSummaryVO } from '../types';
export declare class OpenchatApi {
    private client;
    constructor(client: HttpClient);
    /** List agents */
    getList(params?: QueryParams): Promise<PlusApiResultPageAgentVO>;
    /** Create agent */
    create(body: OpenChatAgentCreateForm): Promise<PlusApiResultAgentVO>;
    /** Get agent detail */
    detail(agentId: string | number): Promise<PlusApiResultAgentVO>;
    /** Wallet summary */
    summary(): Promise<PlusApiResultWalletSummaryVO>;
    /** Wallet transactions */
    transactions(params?: QueryParams): Promise<PlusApiResultPageWalletTransactionVO>;
    /** List short videos */
    getListVideos(params?: QueryParams): Promise<PlusApiResultPageVideoVO>;
    /** Discover feed */
    feed(params?: QueryParams): Promise<PlusApiResultCursorFeedVO>;
    /** Notification page query */
    page(params?: QueryParams): Promise<PlusApiResultPageNotificationVO>;
    /** Unified search query */
    query(body: OpenChatSearchForm): Promise<PlusApiResultPageSearchItemVO>;
    /** Get user setting profile */
    get(): Promise<PlusApiResultSettingsVO>;
    /** Update user settings */
    update(body: OpenChatSettingsUpdateForm): Promise<PlusApiResultSettingsVO>;
    /** Skill market list */
    getMarket(params?: QueryParams): Promise<PlusApiResultPageSkillVO>;
    /** Tool market list */
    getMarketTools(params?: QueryParams): Promise<PlusApiResultPageToolVO>;
    /** Moments list */
    moments(params?: QueryParams): Promise<PlusApiResultPageMomentVO>;
    /** Device list */
    getListDevices(): Promise<PlusApiResultListDeviceVO>;
    /** App store app list */
    apps(params?: QueryParams): Promise<PlusApiResultPageAppVO>;
    /** Create file upload session */
    createUploadSession(body: OpenChatFileUploadSessionForm): Promise<PlusApiResultFileUploadSessionVO>;
    /** Upload file chunk */
    uploadChunk(body: FormData): Promise<PlusApiResultFileUploadChunkVO>;
    /** Complete file upload */
    completeUpload(body: OpenChatUploadCompleteForm): Promise<PlusApiResultFileVO>;
}
export declare function createOpenchatApi(client: HttpClient): OpenchatApi;
//# sourceMappingURL=openchat.d.ts.map