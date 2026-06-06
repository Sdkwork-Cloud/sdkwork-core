/** 积分兑换记录 */
export interface PointsExchangeRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    recordId?: string;
    /** 商品ID */
    goodsId?: string;
    /** 商品名称 */
    goodsName?: string;
    /** 商品图片 */
    goodsImage?: string;
    /** 兑换数量 */
    quantity?: number;
    /** 消耗积分 */
    pointsCost?: number;
    /** 兑换时间 */
    exchangeTime?: string;
    /** 状态: pending/delivered/completed/cancelled */
    status?: string;
    /** 发货时间 */
    deliverTime?: string;
    /** 物流信息(实物商品) */
    logisticsInfo?: string;
    /** 备注 */
    remark?: string;
}
//# sourceMappingURL=points-exchange-record-vo.d.ts.map