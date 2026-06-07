import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultTradeTaskPageVO, PlusApiResultTradeTaskVO, TradeTaskAcceptForm, TradeTaskApproveForm, TradeTaskCancelForm, TradeTaskSubmitForm } from '../types';
export declare class TradeApi {
    private client;
    constructor(client: HttpClient);
    /** List available trade tasks */
    listTasks(params?: QueryParams): Promise<PlusApiResultTradeTaskPageVO>;
    /** Get trade task detail */
    getTaskDetail(taskId: string | number): Promise<PlusApiResultTradeTaskVO>;
    /** Accept task */
    acceptTask(taskId: string | number, body: TradeTaskAcceptForm): Promise<PlusApiResultTradeTaskVO>;
    /** Submit task delivery */
    submitTask(taskId: string | number, body: TradeTaskSubmitForm): Promise<PlusApiResultTradeTaskVO>;
    /** Approve or reject task */
    approveTask(taskId: string | number, body: TradeTaskApproveForm): Promise<PlusApiResultTradeTaskVO>;
    /** Cancel task */
    cancelTask(taskId: string | number, body: TradeTaskCancelForm): Promise<PlusApiResultTradeTaskVO>;
    /** List tasks published by current user */
    listPublishedTasks(params?: QueryParams): Promise<PlusApiResultTradeTaskPageVO>;
    /** List tasks accepted by current user */
    listAcceptedTasks(params?: QueryParams): Promise<PlusApiResultTradeTaskPageVO>;
}
export declare function createTradeApi(client: HttpClient): TradeApi;
//# sourceMappingURL=trade.d.ts.map