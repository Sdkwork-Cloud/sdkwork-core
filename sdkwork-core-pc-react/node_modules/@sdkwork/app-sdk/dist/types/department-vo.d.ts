/** 部门响应 */
export interface DepartmentVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 部门名称 */
    name?: string;
    /** 部门编码 */
    code?: string;
    /** 部门描述 */
    description?: string;
    /** 组织ID */
    ownerId?: number;
    /** 父部门ID */
    parentId?: number;
    /** 层级 */
    level?: number;
    /** 是否启用 */
    isActive?: boolean;
    /** 排序 */
    sortOrder?: number;
    /** 完整路径名称 */
    fullPathName?: string;
}
//# sourceMappingURL=department-vo.d.ts.map