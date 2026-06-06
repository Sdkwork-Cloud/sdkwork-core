/** 实验结果响应 */
export interface ExperimentResultsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 实验标识 */
    experimentKey?: string;
    /** 实验结果 */
    results?: Record<string, unknown>[];
    /** 统计信息 */
    statistics?: Record<string, unknown>;
    /** 结果状态 */
    status?: string;
    /** 生成时间 */
    generatedAt?: string;
}
//# sourceMappingURL=experiment-results-vo.d.ts.map