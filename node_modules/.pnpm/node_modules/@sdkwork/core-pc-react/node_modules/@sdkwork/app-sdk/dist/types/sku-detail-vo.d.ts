/** SKU详情 */
export interface SkuDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** SKU ID */
    id?: string;
    /** 产品ID */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** SKU编码 */
    skuCode?: string;
    /** SKU名称 */
    skuName?: string;
    /** 规格属性 */
    attributes?: Record<string, string>;
    /** 价格 */
    price?: number;
    /** 原价 */
    originalPrice?: number;
    /** 库存 */
    stock?: number;
    /** 预警库存 */
    warningStock?: number;
    /** 销量 */
    sales?: number;
    /** 主图URL */
    mainImage?: string;
    /** 图片列表 */
    images?: string[];
    /** 重量 */
    weight?: number;
    /** 体积 */
    volume?: number;
    /** 状态 */
    status?: string;
    /** 排序 */
    sort?: number;
}
//# sourceMappingURL=sku-detail-vo.d.ts.map