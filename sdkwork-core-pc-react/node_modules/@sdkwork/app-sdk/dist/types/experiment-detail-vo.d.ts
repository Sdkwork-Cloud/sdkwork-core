/** 实验详情响应 */
export interface ExperimentDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 实验标识 */
    experimentKey?: string;
    /** 实验名称 */
    experimentName?: string;
    /** 实验描述 */
    experimentDescription?: string;
    /** 实验状态 */
    status?: string;
    /** 实验变体 */
    variants?: Record<string, unknown>[];
    /** 实验配置 */
    config?: Record<string, unknown>;
}
//# sourceMappingURL=experiment-detail-vo.d.ts.map