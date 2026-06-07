/** 聊天会话响应 */
export interface ChatSessionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 会话ID */
    id?: number;
    /** 会话名称 */
    name?: string;
    /** 会话描述 */
    description?: string;
    /** 会话类型：chat/document/code */
    type?: string;
    /** 会话状态：active/inactive */
    status?: string;
    /** AI模型ID */
    modelId?: string;
    /** 消息总数 */
    messageCount?: number;
    /** 未读消息数 */
    unreadCount?: number;
    /** 最后消息时间 */
    lastMessageTime?: string;
    /** 最后消息内容 */
    lastMessageContent?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
}
//# sourceMappingURL=chat-session-vo.d.ts.map