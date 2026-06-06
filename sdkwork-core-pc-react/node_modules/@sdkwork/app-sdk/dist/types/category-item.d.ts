/** 类别项 */
export interface CategoryItem {
    /** 类别ID */
    id?: string;
    /** 类别名称 */
    name?: string;
    /** 类别描述 */
    description?: string;
    /** 父类别ID */
    parentId?: string;
    /** 子类别 */
    subcategories?: CategoryItem[];
    /** 标签 */
    tags?: string[];
}
//# sourceMappingURL=category-item.d.ts.map