/** 最近项目响应 */
export interface RecentProjectVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 项目ID */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 项目描述 */
    description?: string;
    /** 项目图标 */
    icon?: string;
    /** 项目封面 */
    cover?: string;
    /** 项目类型 */
    type?: string;
    /** 项目状态：draft/in_progress/completed */
    status?: string;
    /** 项目链接 */
    url?: string;
    /** 项目创建时间 */
    createTime?: string;
    /** 项目更新时间 */
    updateTime?: string;
    /** 项目成员数 */
    memberCount?: number;
    /** 项目文件数 */
    fileCount?: number;
    /** 项目大小 */
    size?: number;
    /** 项目标签 */
    tags?: string[];
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
}
//# sourceMappingURL=recent-project-vo.d.ts.map