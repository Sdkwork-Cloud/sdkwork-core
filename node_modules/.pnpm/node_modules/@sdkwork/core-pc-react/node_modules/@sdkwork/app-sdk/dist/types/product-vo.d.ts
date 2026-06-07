/** 产品信息 */
export interface ProductVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 产品ID */
    id?: string;
    /** 产品标题 */
    title?: string;
    /** 产品类型 */
    type?: string;
    /** 产品简介 */
    summary?: string;
    /** 主图URL */
    mainImage?: string;
    /** 价格 */
    price?: number;
    /** 原价 */
    originalPrice?: number;
    /** 销量 */
    sales?: number;
    /** 状态 */
    status?: string;
    /** 是否推荐 */
    recommended?: boolean;
    /** 是否热门 */
    hot?: boolean;
    /** 分类名称 */
    categoryName?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 标签列表 */
    tags?: string[];
}
//# sourceMappingURL=product-vo.d.ts.map