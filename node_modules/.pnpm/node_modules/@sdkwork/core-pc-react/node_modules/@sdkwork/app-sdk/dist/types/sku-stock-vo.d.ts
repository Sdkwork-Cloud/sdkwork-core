/** SKU库存响应 */
export interface SkuStockVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** SKU ID */
    skuId?: string;
    /** 产品ID */
    productId?: string;
    /** SKU编码 */
    skuCode?: string;
    /** SKU名称 */
    skuName?: string;
    /** 库存数量 */
    quantity?: number;
    /** 预警库存 */
    warningStock?: number;
    /** 锁定库存 */
    lockedStock?: number;
    /** 可用库存 */
    availableStock?: number;
    /** 库存状态 */
    status?: string;
}
//# sourceMappingURL=sku-stock-vo.d.ts.map