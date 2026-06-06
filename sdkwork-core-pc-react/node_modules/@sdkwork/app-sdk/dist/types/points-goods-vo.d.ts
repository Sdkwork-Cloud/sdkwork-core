/** 积分商品 */
export interface PointsGoodsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 商品ID */
    id?: string;
    /** 商品名称 */
    name?: string;
    /** 商品图片 */
    image?: string;
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
    /** 已兑换数量 */
    exchangedCount?: number;
    /** 商品标签 */
    tags?: string[];
    /** 热销排序 */
    sortWeight?: number;
}
//# sourceMappingURL=points-goods-vo.d.ts.map