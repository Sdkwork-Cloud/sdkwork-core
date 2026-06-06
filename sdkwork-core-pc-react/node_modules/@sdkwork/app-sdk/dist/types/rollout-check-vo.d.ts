/** 发布检查响应 */
export interface RolloutCheckVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 发布标识 */
    rolloutKey?: string;
    /** 检查结果 */
    canRollout?: boolean;
    /** 检查原因 */
    reason?: string;
    /** 检查状态 */
    status?: string;
    /** 检查时间 */
    checkedAt?: string;
}
//# sourceMappingURL=rollout-check-vo.d.ts.map