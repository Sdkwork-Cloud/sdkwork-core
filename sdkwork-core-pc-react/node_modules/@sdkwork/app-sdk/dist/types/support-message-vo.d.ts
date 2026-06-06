/** 支持消息信息 */
export interface SupportMessageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 消息ID */
    id?: string;
    /** 会话ID */
    sessionId?: string;
    /** 消息内容 */
    content?: string;
    /** 附件URL */
    attachmentUrl?: string;
    /** 发送方类型 */
    senderType?: string;
    /** 发送时间 */
    sendTime?: string;
    /** 是否已读 */
    read?: boolean;
}
//# sourceMappingURL=support-message-vo.d.ts.map