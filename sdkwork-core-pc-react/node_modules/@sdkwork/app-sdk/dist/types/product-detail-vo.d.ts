import { ProductAttributeVO } from './product-attribute-vo';
import { SkuVO } from './sku-vo';
/** 产品详情 */
export interface ProductDetailVO {
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
    /** 产品描述 */
    description?: string;
    /** 产品简介 */
    summary?: string;
    /** 分类ID */
    categoryId?: string;
    /** 分类名称 */
    categoryName?: string;
    /** 品牌ID */
    brandId?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 标签ID列表 */
    tagIds?: string[];
    /** 标签列表 */
    tags?: string[];
    /** 主图URL */
    mainImage?: string;
    /** 图片列表 */
    images?: string[];
    /** 视频URL */
    videoUrl?: string;
    /** 价格 */
    price?: number;
    /** 原价 */
    originalPrice?: number;
    /** 库存 */
    stock?: number;
    /** 销量 */
    sales?: number;
    /** 状态 */
    status?: string;
    /** 是否推荐 */
    recommended?: boolean;
    /** 是否热门 */
    hot?: boolean;
    /** 排序 */
    sort?: number;
    /** 上架时间 */
    shelfTime?: string;
    /** 下架时间 */
    offShelfTime?: string;
    /** 产品属性 */
    attributes?: ProductAttributeVO[];
    /** SKU列表 */
    skus?: SkuVO[];
    /** 评价统计 */
    reviewStatistics?: Record<string, unknown>;
}
//# sourceMappingURL=product-detail-vo.d.ts.map