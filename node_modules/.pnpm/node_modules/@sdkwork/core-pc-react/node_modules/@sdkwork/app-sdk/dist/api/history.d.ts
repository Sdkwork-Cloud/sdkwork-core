import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { BrowseHistoryAddForm, PlusApiResultBrowseStatisticsVO, PlusApiResultHistoryStatisticsVO, PlusApiResultListGenerationHistoryVO, PlusApiResultListOperationHistoryVO, PlusApiResultListSessionInfoVO, PlusApiResultPageBrowseHistoryVO, PlusApiResultPageGenerationHistoryVO, PlusApiResultPageLoginHistoryVO, PlusApiResultPageOperationHistoryVO, PlusApiResultSessionInfoVO, PlusApiResultVoid } from '../types';
export declare class HistoryApi {
    private client;
    constructor(client: HttpClient);
    /** 浏览历史 */
    listBrowse(params?: QueryParams): Promise<PlusApiResultPageBrowseHistoryVO>;
    /** 添加浏览记录 */
    addBrowse(body: BrowseHistoryAddForm): Promise<PlusApiResultVoid>;
    /** 清空浏览历史 */
    clearBrowse(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 历史统计 */
    getHistoryStatistics(): Promise<PlusApiResultHistoryStatisticsVO>;
    /** 浏览统计 */
    getBrowseStatistics(): Promise<PlusApiResultBrowseStatisticsVO>;
    /** 所有会话 */
    listSessions(): Promise<PlusApiResultListSessionInfoVO>;
    /** 当前会话 */
    getCurrentSession(): Promise<PlusApiResultSessionInfoVO>;
    /** 操作历史 */
    listOperation(params?: QueryParams): Promise<PlusApiResultPageOperationHistoryVO>;
    /** 最近操作 */
    getRecentOperations(params?: QueryParams): Promise<PlusApiResultListOperationHistoryVO>;
    /** 登录历史 */
    listLogin(params?: QueryParams): Promise<PlusApiResultPageLoginHistoryVO>;
    /** 生成历史 */
    listGeneration(params?: QueryParams): Promise<PlusApiResultPageGenerationHistoryVO>;
    /** 清空生成历史 */
    clearGeneration(): Promise<PlusApiResultVoid>;
    /** 最近生成 */
    getRecentGenerations(params?: QueryParams): Promise<PlusApiResultListGenerationHistoryVO>;
    /** 终止会话 */
    terminateSession(sessionId: string | number): Promise<PlusApiResultVoid>;
    /** 终止其他会话 */
    terminateOtherSessions(): Promise<PlusApiResultVoid>;
    /** 删除生成历史 */
    deleteGeneration(historyId: string | number): Promise<PlusApiResultVoid>;
    /** 删除浏览记录 */
    deleteBrowse(historyId: string | number): Promise<PlusApiResultVoid>;
    /** 批量删除浏览记录 */
    batchDeleteBrowse(): Promise<PlusApiResultVoid>;
}
export declare function createHistoryApi(client: HttpClient): HistoryApi;
//# sourceMappingURL=history.d.ts.map