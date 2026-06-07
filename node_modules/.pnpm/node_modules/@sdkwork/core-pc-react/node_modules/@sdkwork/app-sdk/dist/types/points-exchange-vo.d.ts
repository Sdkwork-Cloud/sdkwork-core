/** 积分兑换结果 */
export interface PointsExchangeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 兑换记录ID */
    recordId?: string;
    /** 是否兑换成功 */
    success?: boolean;
    /** 商品名称 */
    goodsName?: string;
    /** 消耗积分 */
    pointsCost?: number;
    /** 剩余积分 */
    remainingPoints?: number;
    /** 兑换数量 */
    quantity?: number;
    /** 兑换时间 */
    exchangeTime?: string;
    /** 兑换状态 */
    status?: string;
    /** 到账内容 */
    rewardContent?: string;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=points-exchange-vo.d.ts.map