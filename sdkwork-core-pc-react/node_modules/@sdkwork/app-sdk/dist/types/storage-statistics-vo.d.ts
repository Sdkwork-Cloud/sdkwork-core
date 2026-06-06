import { StorageTrendVO } from './storage-trend-vo';
import { StorageTypeDistributionVO } from './storage-type-distribution-vo';
/** 存储统计响应 */
export interface StorageStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总存储空间（字节） */
    totalStorage?: number;
    /** 已用存储空间（字节） */
    usedStorage?: number;
    /** 剩余存储空间（字节） */
    remainingStorage?: number;
    /** 存储使用率 */
    usageRate?: number;
    /** 存储类型分布 */
    typeDistribution?: StorageTypeDistributionVO;
    /** 存储增长趋势 */
    trend?: StorageTrendVO;
}
//# sourceMappingURL=storage-statistics-vo.d.ts.map