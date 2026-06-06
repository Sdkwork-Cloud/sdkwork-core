/** 最近活动响应 */
export interface RecentActivityVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 活动ID */
    id?: string;
    /** 活动类型：create/update/delete/view/share */
    type?: string;
    /** 活动标题 */
    title?: string;
    /** 活动描述 */
    description?: string;
    /** 活动图标 */
    icon?: string;
    /** 活动链接 */
    url?: string;
    /** 活动状态：success/failed/pending */
    status?: string;
    /** 相关资源ID */
    resourceId?: string;
    /** 相关资源类型 */
    resourceType?: string;
    /** 创建者 */
    creator?: string;
    /** 创建时间 */
    createTime?: string;
    /** 是否已读 */
    read?: boolean;
    /** 优先级 */
    priority?: number;
}
//# sourceMappingURL=recent-activity-vo.d.ts.map