import { TreeNodePath } from './tree-node-path';
/** 岗位详情响应 */
export interface PositionDetailVO {
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
    /** 树路径 */
    treePath?: TreeNodePath;
    /** 完整路径名称 */
    fullPathName?: string;
    /** 岗位类别 */
    category?: string;
    /** 级别名称 */
    levelName?: string;
    /** 要求工作经验年限 */
    requiredExperienceYears?: number;
    /** 要求学历 */
    requiredEducation?: string;
    /** 最大人数限制 */
    maxMemberCount?: number;
    /** 当前成员数量 */
    currentMemberCount?: number;
    /** 是否已满员 */
    isFull?: boolean;
}
//# sourceMappingURL=position-detail-vo.d.ts.map