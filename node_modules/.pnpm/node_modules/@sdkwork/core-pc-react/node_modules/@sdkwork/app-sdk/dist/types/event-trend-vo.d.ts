/** 事件趋势VO */
export interface EventTrendVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 事件名称 */
    eventName?: string;
    /** 时间点列表 */
    timePoints?: string[];
    /** 数值列表 */
    values?: number[];
    /** 总次数 */
    totalCount?: number;
    /** 增长率 */
    growthRate?: number;
    /** 时间间隔 */
    interval?: string;
}
//# sourceMappingURL=event-trend-vo.d.ts.map