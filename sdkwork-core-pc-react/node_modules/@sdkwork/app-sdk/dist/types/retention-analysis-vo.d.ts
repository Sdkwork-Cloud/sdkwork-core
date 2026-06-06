/** 留存分析VO */
export interface RetentionAnalysisVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 留存类型 */
    retentionType?: string;
    /** 留存率 */
    retentionRates?: Record<string, number>;
    /** 平均留存率 */
    averageRetentionRate?: number;
    /** 总用户数 */
    totalUsers?: number;
    /** 群组大小 */
    cohortSizes?: Record<string, number>;
}
//# sourceMappingURL=retention-analysis-vo.d.ts.map