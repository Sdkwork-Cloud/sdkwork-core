/** VIP特权使用情况响应 */
export interface VipPrivilegeUsageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 加速特权已使用次数 */
    speedUpUsed?: number;
    /** 加速特权限制次数 */
    speedUpLimit?: number;
    /** 优先队列已使用次数 */
    priorityQueueUsed?: number;
    /** 优先队列限制次数 */
    priorityQueueLimit?: number;
    /** 专属模型已使用次数 */
    exclusiveModelUsed?: number;
    /** 专属模型限制次数 */
    exclusiveModelLimit?: number;
}
//# sourceMappingURL=vip-privilege-usage-vo.d.ts.map