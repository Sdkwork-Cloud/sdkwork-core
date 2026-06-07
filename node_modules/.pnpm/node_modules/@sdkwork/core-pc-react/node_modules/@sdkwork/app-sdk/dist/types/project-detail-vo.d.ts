import { MemberVO } from './member-vo';
import { ProjectSettings } from './project-settings';
/** 项目详情响应 */
export interface ProjectDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 项目ID */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目标题 */
    projectTitle?: string;
    /** 项目描述 */
    projectDescription?: string;
    /** 项目类型 */
    projectType?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 项目代码 */
    projectCode?: string;
    /** 项目图标 */
    projectIcon?: string;
    /** 封面图片URL */
    coverImageUrl?: string;
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
    /** 作者 */
    author?: string;
    /** 站点路径 */
    sitePath?: string;
    /** 域名前缀 */
    domainPrefix?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 是否模板 */
    isTemplate?: boolean;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 成员列表 */
    members?: MemberVO[];
    /** 项目状态 */
    status?: string;
    /** 状态名称 */
    statusName?: string;
    /** 项目设置 */
    settings?: ProjectSettings;
}
//# sourceMappingURL=project-detail-vo.d.ts.map