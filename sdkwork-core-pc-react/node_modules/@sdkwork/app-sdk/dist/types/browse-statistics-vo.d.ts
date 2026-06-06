/** 浏览统计响应 */
export interface BrowseStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总浏览次数 */
    totalCount?: number;
    /** 总浏览时长(分钟) */
    totalDuration?: number;
    /** 平均浏览时长(秒) */
    averageDuration?: number;
    /** 今日浏览次数 */
    todayCount?: number;
    /** 本周浏览次数 */
    weeklyCount?: number;
    /** 本月浏览次数 */
    monthlyCount?: number;
    /** 浏览类型分布 */
    typeDistribution?: Record<string, number>;
    /** 浏览来源分布 */
    sourceDistribution?: Record<string, number>;
    /** 每日浏览趋势(最近7天) */
    dailyTrend?: Record<string, number>;
}
//# sourceMappingURL=browse-statistics-vo.d.ts.map