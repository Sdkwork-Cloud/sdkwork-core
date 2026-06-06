import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { ChatExportForm, ChatMessageSendForm, ChatSessionCreateForm, ChatSessionUpdateForm, PlusApiResultChatMessageVO, PlusApiResultChatSessionDetailVO, PlusApiResultChatSessionVO, PlusApiResultExportVO, PlusApiResultPageChatMessageVO, PlusApiResultPageChatSessionVO, PlusApiResultVoid } from '../types';
export declare class ChatApi {
    private client;
    constructor(client: HttpClient);
    /** 获取会话详情 */
    getSessionDetail(sessionId: string | number): Promise<PlusApiResultChatSessionDetailVO>;
    /** 更新会话 */
    updateSession(sessionId: string | number, body: ChatSessionUpdateForm): Promise<PlusApiResultVoid>;
    /** 删除会话 */
    deleteSession(sessionId: string | number): Promise<PlusApiResultVoid>;
    /** 获取会话列表 */
    listSessions(params?: QueryParams): Promise<PlusApiResultPageChatSessionVO>;
    /** 创建对话会话 */
    createSession(body: ChatSessionCreateForm): Promise<PlusApiResultChatSessionVO>;
    /** 停止生成 */
    stopGeneration(sessionId: string | number): Promise<PlusApiResultVoid>;
    /** 获取消息历史 */
    getMessageHistory(sessionId: string | number, params?: QueryParams): Promise<PlusApiResultPageChatMessageVO>;
    /** 发送消息 */
    sendMessage(sessionId: string | number, body: ChatMessageSendForm): Promise<PlusApiResultChatMessageVO>;
    /** 重新生成 */
    regenerateMessage(sessionId: string | number, messageId: string | number): Promise<PlusApiResultChatMessageVO>;
    /** 收藏消息 */
    favoriteMessage(sessionId: string | number, messageId: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏消息 */
    unfavoriteMessage(sessionId: string | number, messageId: string | number): Promise<PlusApiResultVoid>;
    /** 流式发送消息 */
    sendMessageStream(sessionId: string | number, body: ChatMessageSendForm): Promise<void>;
    /** 导出对话 */
    exportConversation(sessionId: string | number, body: ChatExportForm): Promise<PlusApiResultExportVO>;
    /** 复制对话 */
    copySession(sessionId: string | number): Promise<PlusApiResultChatSessionVO>;
}
export declare function createChatApi(client: HttpClient): ChatApi;
//# sourceMappingURL=chat.d.ts.map