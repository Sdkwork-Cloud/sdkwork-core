/** 通知详情VO */
export interface NotificationDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 通知ID */
    notificationId?: string;
    /** 通知标题 */
    title?: string;
    /** 通知内容 */
    content?: string;
    /** 通知类型 */
    type?: string;
    /** 通知状态 */
    status?: string;
    /** 通知来源 */
    source?: string;
    /** 跳转链接 */
    redirectUrl?: string;
    /** 是否已读 */
    isRead?: boolean;
    /** 阅读时间 */
    readAt?: string;
    /** 扩展数据 */
    extraData?: Record<string, unknown>;
}
//# sourceMappingURL=notification-detail-vo.d.ts.map