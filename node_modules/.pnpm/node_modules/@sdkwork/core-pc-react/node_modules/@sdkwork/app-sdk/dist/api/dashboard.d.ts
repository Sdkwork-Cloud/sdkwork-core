import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultAchievementRewardVO, PlusApiResultChartDataVO, PlusApiResultDashboardCommerceStatisticsVO, PlusApiResultGenerationStatisticsVO, PlusApiResultHomeDashboardVO, PlusApiResultListAchievementVO, PlusApiResultListRecentActivityVO, PlusApiResultListRecommendationVO, PlusApiResultListShortcutVO, PlusApiResultListTodoItemVO, PlusApiResultListTrendingItemVO, PlusApiResultMapStringObject, PlusApiResultStorageStatisticsVO, PlusApiResultUsageStatisticsVO, PlusApiResultUserLevelVO, PlusApiResultUserStatisticsVO, PlusApiResultVipStatisticsVO, PlusApiResultVoid, ShortcutsUpdateForm } from '../types';
export declare class DashboardApi {
    private client;
    constructor(client: HttpClient);
    /** 完成待办 */
    completeTodoItem(todoId: string | number): Promise<PlusApiResultVoid>;
    /** 快捷入口 */
    getShortcuts(): Promise<PlusApiResultListShortcutVO>;
    /** 更新快捷入口 */
    updateShortcuts(body: ShortcutsUpdateForm): Promise<PlusApiResultVoid>;
    /** 领取成就奖励 */
    claimAchievementReward(achievementId: string | number): Promise<PlusApiResultAchievementRewardVO>;
    /** 今日热点 */
    getTrendingItems(params?: QueryParams): Promise<PlusApiResultListTrendingItemVO>;
    /** 待办事项 */
    getTodoItems(): Promise<PlusApiResultListTodoItemVO>;
    /** 用户统计 */
    getUserStatistics(): Promise<PlusApiResultUserStatisticsVO>;
    /** 会员统计 */
    getVipStatistics(): Promise<PlusApiResultVipStatisticsVO>;
    /** 使用统计 */
    getUsageStatistics(params?: QueryParams): Promise<PlusApiResultUsageStatisticsVO>;
    /** 存储统计 */
    getStorageStatistics(): Promise<PlusApiResultStorageStatisticsVO>;
    /** 生成统计 */
    getGenerationStatistics(params?: QueryParams): Promise<PlusApiResultGenerationStatisticsVO>;
    /** 推荐内容 */
    getRecommendations(params?: QueryParams): Promise<PlusApiResultListRecommendationVO>;
    /** 数据概览 */
    getDataOverview(): Promise<PlusApiResultMapStringObject>;
    /** 用户等级 */
    getUserLevel(): Promise<PlusApiResultUserLevelVO>;
    /** 首页数据 */
    getHome(): Promise<PlusApiResultHomeDashboardVO>;
    /** 图表数据 */
    getChartData(chartType: string | number, params?: QueryParams): Promise<PlusApiResultChartDataVO>;
    /** 最近活动 */
    getRecentActivities(params?: QueryParams): Promise<PlusApiResultListRecentActivityVO>;
    /** 成就列表 */
    getAchievements(): Promise<PlusApiResultListAchievementVO>;
    /** Commerce statistics */
    getCommerceStatistics(params?: QueryParams): Promise<PlusApiResultDashboardCommerceStatisticsVO>;
}
export declare function createDashboardApi(client: HttpClient): DashboardApi;
//# sourceMappingURL=dashboard.d.ts.map