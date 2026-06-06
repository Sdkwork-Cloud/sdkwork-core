/** 历史统计响应 */
export interface HistoryStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 浏览历史总数 */
    browseCount?: number;
    /** 操作历史总数 */
    operationCount?: number;
    /** 生成历史总数 */
    generationCount?: number;
    /** 登录历史总数 */
    loginCount?: number;
    /** 活跃会话数 */
    activeSessionCount?: number;
    /** 今日操作次数 */
    todayOperationCount?: number;
    /** 本周操作次数 */
    weeklyOperationCount?: number;
    /** 本月操作次数 */
    monthlyOperationCount?: number;
    /** 最频繁操作类型 */
    mostFrequentAction?: string;
    /** 最常浏览类型 */
    mostFrequentBrowseType?: string;
}
//# sourceMappingURL=history-statistics-vo.d.ts.map