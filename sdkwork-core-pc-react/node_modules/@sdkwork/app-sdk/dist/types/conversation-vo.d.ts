/** 会话响应 */
export interface ConversationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 会话ID */
    conversationId?: string;
    /** 会话类型 */
    conversationType?: string;
    /** 对方用户ID */
    otherUserId?: string;
    /** 对方用户名 */
    otherUsername?: string;
    /** 对方昵称 */
    otherNickname?: string;
    /** 对方头像 */
    otherAvatar?: string;
    /** 最后消息内容 */
    lastMessage?: string;
    /** 最后消息时间 */
    lastMessageTime?: string;
    /** 未读消息数 */
    unreadCount?: number;
    /** 是否置顶 */
    isTop?: boolean;
}
//# sourceMappingURL=conversation-vo.d.ts.map