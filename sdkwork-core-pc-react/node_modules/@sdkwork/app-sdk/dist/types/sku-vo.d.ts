/** SKU信息 */
export interface SkuVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** SKU ID */
    id?: string;
    /** 产品ID */
    productId?: string;
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
    /** 销量 */
    sales?: number;
    /** 图片URL */
    image?: string;
    /** 状态 */
    status?: string;
    /** 排序 */
    sort?: number;
}
//# sourceMappingURL=sku-vo.d.ts.map