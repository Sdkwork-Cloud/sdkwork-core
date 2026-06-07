/** 实验分组响应 */
export interface ExperimentAssignmentVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 实验标识 */
    experimentKey?: string;
    /** 变体标识 */
    variantKey?: string;
    /** 变体名称 */
    variantName?: string;
    /** 分配原因 */
    assignmentReason?: string;
    /** 分配参数 */
    assignmentParams?: Record<string, unknown>;
}
//# sourceMappingURL=experiment-assignment-vo.d.ts.map