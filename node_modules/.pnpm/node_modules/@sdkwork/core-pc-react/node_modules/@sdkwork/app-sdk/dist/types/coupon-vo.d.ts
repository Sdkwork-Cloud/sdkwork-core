/** 优惠券响应 */
export interface CouponVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 优惠券ID */
    couponId?: string;
    /** 优惠券名称 */
    name?: string;
    /** 优惠券类型: DISCOUNT-折扣券, CASH-代金券, GIFT-礼品券, POINTS_EXCHANGE-积分兑换券 */
    type?: string;
    /** 类型名称 */
    typeName?: string;
    /** 描述 */
    description?: string;
    /** 优惠金额(分) */
    amount?: number;
    /** 兑换所需积分，0表示免费领取 */
    pointCost?: number;
    /** 折扣率 */
    discount?: number;
    /** 最低消费金额(分) */
    minConsume?: number;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 发放总量 */
    total?: number;
    /** 每人领取上限 */
    getLimit?: number;
    /** 已领取数量 */
    receivedCount?: number;
    /** 已使用数量 */
    usedCount?: number;
    /** 状态: UNUSED-可领, INACTIVE-不可用, USED/EXPIRED-历史状态 */
    status?: string;
    /** 状态名称 */
    statusName?: string;
    /** 是否可叠加 */
    stackable?: boolean;
    /** 适用范围类型 */
    scopeType?: 'DEFAULT' | 'ALL' | 'VIP_ONLY' | 'CUSTOM';
    /** 适用范围值 */
    scopeValue?: string;
    /** 剩余数量 */
    remainingCount?: number;
    /** 是否可领取 */
    canReceive?: boolean;
    /** 是否支持积分兑换 */
    pointsExchange?: boolean;
}
//# sourceMappingURL=coupon-vo.d.ts.map