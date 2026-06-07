export interface ChatMessageSendForm {
    sessionId?: number;
    content: string;
    type?: string;
    format?: string;
    quoteMessageId?: number;
    needThinking?: boolean;
    streaming?: boolean;
    modelId?: string;
    systemPrompt?: string;
    temperature?: number;
    maxTokens?: number;
    topP?: number;
}
//# sourceMappingURL=chat-message-send-form.d.ts.map