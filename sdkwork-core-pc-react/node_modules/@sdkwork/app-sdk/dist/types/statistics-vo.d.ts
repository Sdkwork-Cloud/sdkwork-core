import { DailyUsageVO } from './daily-usage-vo';
import { StorageStatisticsVO } from './storage-statistics-vo';
/** 统计信息 */
export interface StatisticsVO {
    /** 总项目数 */
    totalProjects?: number;
    /** 总生成次数 */
    totalGenerations?: number;
    /** 总使用时间 */
    totalUsageTime?: number;
    /** 存储空间使用 */
    storage?: StorageStatisticsVO;
    /** 今日使用统计 */
    dailyUsage?: DailyUsageVO;
}
//# sourceMappingURL=statistics-vo.d.ts.map