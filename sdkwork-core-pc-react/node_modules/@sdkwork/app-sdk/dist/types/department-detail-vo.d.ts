import { TreeNodePath } from './tree-node-path';
/** 部门详情响应 */
export interface DepartmentDetailVO {
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
    /** 树路径 */
    treePath?: TreeNodePath;
    /** 完整路径名称 */
    fullPathName?: string;
    /** 负责人ID */
    managerId?: number;
    /** 联系电话 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 成员数量 */
    memberCount?: number;
    /** 子部门数量 */
    childrenCount?: number;
}
//# sourceMappingURL=department-detail-vo.d.ts.map