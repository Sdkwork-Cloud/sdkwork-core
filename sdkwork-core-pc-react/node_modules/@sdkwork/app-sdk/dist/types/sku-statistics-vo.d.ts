/** SKU统计响应 */
export interface SkuStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 产品ID */
    productId?: string;
    /** 产品名称 */
    productName?: string;
    /** SKU总数 */
    totalSkuCount?: number;
    /** 启用SKU数 */
    enabledSkuCount?: number;
    /** 禁用SKU数 */
    disabledSkuCount?: number;
    /** 总库存 */
    totalStock?: number;
    /** 总销量 */
    totalSales?: number;
    /** 平均价格 */
    averagePrice?: number;
    /** 库存预警数 */
    warningStockCount?: number;
    /** 库存趋势 */
    stockTrend?: Record<string, number>;
    /** 销量趋势 */
    salesTrend?: Record<string, number>;
}
//# sourceMappingURL=sku-statistics-vo.d.ts.map