/** 搜索统计响应 */
export interface SearchStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总搜索次数 */
    totalSearches?: number;
    /** 今日搜索次数 */
    todaySearches?: number;
    /** 本周搜索次数 */
    thisWeekSearches?: number;
    /** 本月搜索次数 */
    thisMonthSearches?: number;
    /** 热门搜索词 */
    hotKeywords?: Record<string, number>;
    /** 搜索类型分布 */
    typeDistribution?: Record<string, number>;
    /** 最后搜索时间 */
    lastSearchTime?: string;
}
//# sourceMappingURL=search-statistics-vo.d.ts.map