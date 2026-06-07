/** 分类响应 */
export interface CategoryVO {
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
    /** 分类描述 */
    description?: string;
    /** 父分类ID */
    parentId?: number;
    /** 排序值 */
    sort?: number;
    /** 状态：0-禁用，1-启用 */
    status?: number;
}
//# sourceMappingURL=category-vo.d.ts.map