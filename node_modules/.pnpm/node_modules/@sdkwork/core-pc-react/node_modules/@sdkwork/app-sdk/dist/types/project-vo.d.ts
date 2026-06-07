/** 项目响应 */
export interface ProjectVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 项目ID */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目描述 */
    projectDescription?: string;
    /** 项目类型 */
    projectType?: string;
    /** 项目图标 */
    projectIcon?: string;
    /** 项目颜色 */
    projectColor?: string;
    /** 项目标签 */
    projectTags?: string[];
    /** 工作空间ID */
    workspaceId?: string;
    /** 工作空间名称 */
    workspaceName?: string;
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
    /** 文件数量 */
    fileCount?: number;
    /** 项目状态 */
    status?: string;
    /** 是否为公开项目 */
    isPublic?: boolean;
    /** 当前用户权限 */
    userPermissions?: string[];
}
//# sourceMappingURL=project-vo.d.ts.map