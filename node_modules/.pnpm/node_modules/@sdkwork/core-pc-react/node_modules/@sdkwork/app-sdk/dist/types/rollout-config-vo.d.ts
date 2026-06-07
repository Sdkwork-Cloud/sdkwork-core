/** 发布配置响应 */
export interface RolloutConfigVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 发布标识 */
    rolloutKey?: string;
    /** 发布名称 */
    rolloutName?: string;
    /** 发布配置 */
    config?: Record<string, unknown>;
    /** 发布状态 */
    status?: string;
}
//# sourceMappingURL=rollout-config-vo.d.ts.map