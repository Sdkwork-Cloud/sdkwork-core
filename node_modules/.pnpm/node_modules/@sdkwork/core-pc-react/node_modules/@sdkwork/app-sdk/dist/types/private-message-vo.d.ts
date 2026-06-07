/** 私信消息响应 */
export interface PrivateMessageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 消息ID */
    messageId?: string;
    /** 发送者ID */
    senderId?: string;
    /** 接收者ID */
    recipientId?: string;
    /** 消息内容 */
    content?: string;
    /** 消息类型 */
    messageType?: string;
    /** 发送时间 */
    sendTime?: string;
    /** 是否已读 */
    isRead?: boolean;
    /** 附件URL */
    attachmentUrl?: string;
}
//# sourceMappingURL=private-message-vo.d.ts.map