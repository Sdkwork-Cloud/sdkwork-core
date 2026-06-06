/** 分类树响应 */
export interface CategoryTreeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 分类ID */
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 分类编码 */
    code?: string;
    /** 分类图标 */
    icon?: string;
    /** 父分类ID */
    parentId?: number;
    /** 排序值 */
    sort?: number;
    /** 状态：0-禁用，1-启用 */
    status?: number;
    /** 子分类列表 */
    children?: CategoryTreeVO[];
}
//# sourceMappingURL=category-tree-vo.d.ts.map