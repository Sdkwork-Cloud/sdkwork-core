/** VIP购买响应 */
export interface VipPurchaseVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 订单ID */
    orderId?: string;
    /** 套餐ID */
    packId?: number;
    /** 套餐名称 */
    packName?: string;
    /** 支付金额 */
    amount?: number;
    /** 续费天数 */
    durationDays?: number;
    /** 目标等级ID */
    targetLevelId?: number;
    /** 目标等级名称 */
    targetLevelName?: string;
    /** 订单状态 */
    status?: string;
}
//# sourceMappingURL=vip-purchase-vo.d.ts.map