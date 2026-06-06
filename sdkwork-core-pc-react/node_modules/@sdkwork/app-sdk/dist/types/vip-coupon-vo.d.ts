/** VIP优惠券响应 */
export interface VipCouponVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 优惠券ID */
    id?: string;
    /** 优惠券名称 */
    name?: string;
    /** 折扣比例 */
    discount?: number;
    /** 最低消费金额 */
    minAmount?: number;
    /** 减免金额 */
    reduceAmount?: number;
    /** 有效期开始 */
    validFrom?: string;
    /** 有效期结束 */
    validTo?: string;
    /** 状态 */
    status?: string;
    /** 是否已使用 */
    used?: boolean;
}
//# sourceMappingURL=vip-coupon-vo.d.ts.map