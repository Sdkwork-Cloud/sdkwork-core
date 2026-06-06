import { AttachmentVO } from './attachment-vo';
/** 聊天消息响应 */
export interface ChatMessageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 消息ID */
    id?: number;
    /** 会话ID */
    sessionId?: number;
    /** 消息内容 */
    content?: string;
    /** 消息类型：text/image/audio/video/file */
    type?: string;
    /** 消息格式：plain/markdown */
    format?: string;
    /** 消息状态：pending/success/failed */
    status?: string;
    /** 发送者类型：user/ai/system */
    senderType?: string;
    /** 发送者ID */
    senderId?: string;
    /** 接收者ID */
    receiverId?: string;
    /** 引用消息ID */
    quoteMessageId?: number;
    /** 思考过程 */
    thinking?: string;
    /** AI模型ID */
    modelId?: string;
    /** 响应时间（毫秒） */
    responseTime?: number;
    /** 使用的token数 */
    tokenCount?: number;
    /** 附件列表 */
    attachments?: AttachmentVO[];
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
}
//# sourceMappingURL=chat-message-vo.d.ts.map