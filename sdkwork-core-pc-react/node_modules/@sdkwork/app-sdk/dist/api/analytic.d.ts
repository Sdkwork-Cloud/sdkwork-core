import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { BatchEventTrackForm, ErrorTrackForm, EventTrackForm, PageViewTrackForm, PlusApiResultAiUsageStatsVO, PlusApiResultChannelAnalysisVO, PlusApiResultConversionPathVO, PlusApiResultDeviceDistributionVO, PlusApiResultEventStatsVO, PlusApiResultEventTrendVO, PlusApiResultExportResultVO, PlusApiResultFunnelAnalysisVO, PlusApiResultListRealtimeEventVO, PlusApiResultListReportTypeVO, PlusApiResultListTopEventVO, PlusApiResultPathAnalysisVO, PlusApiResultRealtimeOnlineVO, PlusApiResultRetentionAnalysisVO, PlusApiResultUserActivityVO, PlusApiResultUserUsageStatsVO, PlusApiResultVoid, StatsExportForm } from '../types';
export declare class AnalyticApi {
    private client;
    constructor(client: HttpClient);
    /** 上报页面访问 */
    trackPageView(body: PageViewTrackForm): Promise<PlusApiResultVoid>;
    /** 导出统计 */
    exportStats(body: StatsExportForm): Promise<PlusApiResultExportResultVO>;
    /** 上报事件 */
    trackEvent(body: EventTrackForm): Promise<PlusApiResultVoid>;
    /** 批量上报事件 */
    batchTrackEvents(body: BatchEventTrackForm): Promise<PlusApiResultVoid>;
    /** 上报错误 */
    trackError(body: ErrorTrackForm): Promise<PlusApiResultVoid>;
    /** 使用统计 */
    getUserUsageStats(): Promise<PlusApiResultUserUsageStatsVO>;
    /** 留存分析 */
    getRetentionAnalysis(params?: QueryParams): Promise<PlusApiResultRetentionAnalysisVO>;
    /** 报表列表 */
    listReportTypes(): Promise<PlusApiResultListReportTypeVO>;
    /** 实时在线 */
    getRealtimeOnline(): Promise<PlusApiResultRealtimeOnlineVO>;
    /** 实时事件 */
    getRealtimeEvents(params?: QueryParams): Promise<PlusApiResultListRealtimeEventVO>;
    /** 路径分析 */
    getPathAnalysis(params?: QueryParams): Promise<PlusApiResultPathAnalysisVO>;
    /** 漏斗分析 */
    getFunnelAnalysis(params?: QueryParams): Promise<PlusApiResultFunnelAnalysisVO>;
    /** 事件趋势 */
    getEventTrend(params?: QueryParams): Promise<PlusApiResultEventTrendVO>;
    /** 热门事件 */
    getTopEvents(params?: QueryParams): Promise<PlusApiResultListTopEventVO>;
    /** 事件统计 */
    getEventStats(params?: QueryParams): Promise<PlusApiResultEventStatsVO>;
    /** 设备分布 */
    getDeviceDistribution(): Promise<PlusApiResultDeviceDistributionVO>;
    /** 转化路径 */
    getConversionPath(params?: QueryParams): Promise<PlusApiResultConversionPathVO>;
    /** 渠道分析 */
    getChannelAnalysis(params?: QueryParams): Promise<PlusApiResultChannelAnalysisVO>;
    /** AI使用统计 */
    getAiUsageStats(params?: QueryParams): Promise<PlusApiResultAiUsageStatsVO>;
    /** 活跃度统计 */
    getUserActivity(params?: QueryParams): Promise<PlusApiResultUserActivityVO>;
}
export declare function createAnalyticApi(client: HttpClient): AnalyticApi;
//# sourceMappingURL=analytic.d.ts.map