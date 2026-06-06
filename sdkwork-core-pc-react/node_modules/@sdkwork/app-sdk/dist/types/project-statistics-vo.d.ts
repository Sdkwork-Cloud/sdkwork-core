/** 项目统计响应 */
export interface ProjectStatisticsVO {
    /** 项目创建时间 */
    createdAt?: string;
    /** 项目更新时间 */
    updatedAt?: string;
    /** 项目ID */
    projectId?: string;
    /** 文件数量 */
    totalFiles?: number;
    /** 成员数量 */
    totalMembers?: number;
    /** 会话数量 */
    totalConversations?: number;
    /** 文档数量 */
    documentCount?: number;
    /** 标签数量 */
    tagCount?: number;
    /** 最近活动时间 */
    lastActivityTime?: string;
    /** 活动统计 */
    activityStats?: Record<string, number>;
    /** 文档类型分布 */
    documentTypeStats?: Record<string, number>;
}
//# sourceMappingURL=project-statistics-vo.d.ts.map