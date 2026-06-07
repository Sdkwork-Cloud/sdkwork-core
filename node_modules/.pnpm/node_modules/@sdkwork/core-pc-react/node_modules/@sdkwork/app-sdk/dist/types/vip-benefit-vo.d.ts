/** VIP权益响应 */
export interface VipBenefitVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 权益ID */
    id?: number;
    /** 权益名称 */
    name?: string;
    /** 权益标识符 */
    benefitKey?: string;
    /** 权益类型 */
    type?: string;
    /** 权益描述 */
    description?: string;
    /** 权益图标 */
    icon?: string;
    /** 是否已领取 */
    claimed?: boolean;
    /** 使用次数限制 */
    usageLimit?: number;
    /** 已使用次数 */
    usedCount?: number;
}
//# sourceMappingURL=vip-benefit-vo.d.ts.map