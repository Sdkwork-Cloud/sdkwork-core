/** 产品统计 */
export interface ProductStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 产品ID */
    productId?: string;
    /** 总销量 */
    totalSales?: number;
    /** 总库存 */
    totalStock?: number;
    /** 评价数量 */
    reviewCount?: number;
    /** 平均评分 */
    averageRating?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 收藏次数 */
    favoriteCount?: number;
    /** 分享次数 */
    shareCount?: number;
    /** 销售趋势 */
    salesTrend?: Record<string, number>;
    /** 库存趋势 */
    stockTrend?: Record<string, number>;
}
//# sourceMappingURL=product-statistics-vo.d.ts.map