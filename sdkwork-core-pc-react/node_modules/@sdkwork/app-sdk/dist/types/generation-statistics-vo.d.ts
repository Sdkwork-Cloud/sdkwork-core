import { GenerationTypeDistributionVO } from './generation-type-distribution-vo';
/** 生成统计响应 */
export interface GenerationStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 今日生成次数 */
    todayCount?: number;
    /** 本周生成次数 */
    weekCount?: number;
    /** 本月生成次数 */
    monthCount?: number;
    /** 总生成次数 */
    totalCount?: number;
    /** 平均生成时间（毫秒） */
    avgGenerationTime?: number;
    /** 最长生成时间（毫秒） */
    maxGenerationTime?: number;
    /** 最短生成时间（毫秒） */
    minGenerationTime?: number;
    /** 生成成功率 */
    successRate?: number;
    /** 常用模型 */
    mostUsedModel?: string;
    /** 生成类型分布 */
    typeDistribution?: GenerationTypeDistributionVO;
}
//# sourceMappingURL=generation-statistics-vo.d.ts.map