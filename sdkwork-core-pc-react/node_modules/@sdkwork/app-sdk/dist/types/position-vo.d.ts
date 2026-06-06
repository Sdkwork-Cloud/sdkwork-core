/** 岗位响应 */
export interface PositionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 岗位名称 */
    name?: string;
    /** 岗位编码 */
    code?: string;
    /** 岗位描述 */
    description?: string;
    /** 组织ID */
    ownerId?: number;
    /** 父岗位ID */
    parentId?: number;
    /** 岗位级别 */
    level?: number;
    /** 是否启用 */
    isActive?: boolean;
    /** 排序 */
    sortOrder?: number;
    /** 岗位类别 */
    category?: string;
    /** 级别名称 */
    levelName?: string;
}
//# sourceMappingURL=position-vo.d.ts.map