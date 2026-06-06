import { SessionStatsVO } from './session-stats-vo';
/** 聊天会话详情响应 */
export interface ChatSessionDetailVO {
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
    /** 用户ID */
    userId?: string;
    /** AI模型ID */
    modelId?: string;
    /** 系统提示词 */
    systemPrompt?: string;
    /** 温度参数 */
    temperature?: number;
    /** 最大token数 */
    maxTokens?: number;
    /** Top P参数 */
    topP?: number;
    /** 消息总数 */
    messageCount?: number;
    /** 未读消息数 */
    unreadCount?: number;
    /** 最后消息时间 */
    lastMessageTime?: string;
    /** 最后消息内容 */
    lastMessageContent?: string;
    /** 关联资源ID */
    resourceId?: string;
    /** 关联资源类型 */
    resourceType?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 扩展属性 */
    extra?: Record<string, unknown>;
    /** 统计信息 */
    stats?: SessionStatsVO;
}
//# sourceMappingURL=chat-session-detail-vo.d.ts.map