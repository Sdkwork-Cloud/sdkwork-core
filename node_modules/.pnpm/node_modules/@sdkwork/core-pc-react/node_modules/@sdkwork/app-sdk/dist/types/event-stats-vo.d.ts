/** 事件统计VO */
export interface EventStatsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 事件名称 */
    eventName?: string;
    /** 总次数 */
    totalCount?: number;
    /** 每用户平均次数 */
    averagePerUser?: number;
    /** 小时统计 */
    hourlyStats?: Record<string, number>;
    /** 每日统计 */
    dailyStats?: Record<string, number>;
    /** 热门属性 */
    topProperties?: Record<string, unknown>;
}
//# sourceMappingURL=event-stats-vo.d.ts.map