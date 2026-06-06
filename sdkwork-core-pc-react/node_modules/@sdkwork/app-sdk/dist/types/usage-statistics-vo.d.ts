import { UsageFrequencyVO } from './usage-frequency-vo';
import { UsageTimeDistributionVO } from './usage-time-distribution-vo';
/** 使用统计响应 */
export interface UsageStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 今日使用时长（分钟） */
    todayUsage?: number;
    /** 本周使用时长（分钟） */
    weekUsage?: number;
    /** 本月使用时长（分钟） */
    monthUsage?: number;
    /** 总使用时长（分钟） */
    totalUsage?: number;
    /** 平均每日使用时长（分钟） */
    avgDailyUsage?: number;
    /** 最高使用时长（分钟） */
    maxDailyUsage?: number;
    /** 使用频率分布 */
    frequency?: UsageFrequencyVO;
    /** 使用时段分布 */
    timeDistribution?: UsageTimeDistributionVO;
}
//# sourceMappingURL=usage-statistics-vo.d.ts.map