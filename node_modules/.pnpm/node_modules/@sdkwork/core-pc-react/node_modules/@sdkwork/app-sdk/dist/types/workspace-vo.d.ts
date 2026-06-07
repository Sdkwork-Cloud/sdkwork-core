import { WorkspaceSettings } from './workspace-settings';
/** 工作空间响应 */
export interface WorkspaceVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 工作空间ID */
    workspaceId?: string;
    /** 工作空间名称 */
    workspaceName?: string;
    /** 工作空间描述 */
    workspaceDescription?: string;
    /** 工作空间图标 */
    workspaceIcon?: string;
    /** 工作空间颜色 */
    workspaceColor?: string;
    /** 工作空间类型 */
    workspaceType?: string;
    /** 创建者ID */
    creatorId?: string;
    /** 创建者名称 */
    creatorName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 成员数量 */
    memberCount?: number;
    /** 项目数量 */
    projectCount?: number;
    /** 工作空间状态 */
    status?: string;
    /** 是否为公开工作空间 */
    isPublic?: boolean;
    /** 当前用户角色 */
    userRole?: string;
    /** 当前用户权限 */
    userPermissions?: string[];
    /** 工作空间设置 */
    settings?: WorkspaceSettings;
}
//# sourceMappingURL=workspace-vo.d.ts.map