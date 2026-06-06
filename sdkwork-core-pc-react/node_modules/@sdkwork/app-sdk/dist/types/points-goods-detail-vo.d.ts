/** 积分商品详情 */
export interface PointsGoodsDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 商品ID */
    id?: string;
    /** 商品名称 */
    name?: string;
    /** 商品描述 */
    description?: string;
    /** 商品图片列表 */
    images?: string[];
    /** 商品分类 */
    category?: string;
    /** 所需积分 */
    points?: number;
    /** 原价积分 */
    originalPoints?: number;
    /** 库存数量 */
    stock?: number;
    /** 是否可兑换 */
    exchangeable?: boolean;
    /** 每人限兑数量 */
    limitPerUser?: number;
    /** 我已兑换数量 */
    myExchangedCount?: number;
    /** 兑换说明 */
    exchangeNote?: string;
    /** 有效期 */
    validUntil?: string;
    /** 使用说明 */
    usageInstructions?: string;
}
//# sourceMappingURL=points-goods-detail-vo.d.ts.map