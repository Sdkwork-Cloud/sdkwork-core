/** 产品分类 */
export interface ProductCategoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 分类ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 父分类ID */
    parentId?: string;
    /** 分类描述 */
    description?: string;
    /** 分类图标 */
    icon?: string;
    /** 排序 */
    sort?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 子分类列表 */
    children?: ProductCategoryVO[];
}
//# sourceMappingURL=product-category-vo.d.ts.map