/** AI提示语使用历史响应 */
export interface PromptHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 历史记录ID */
    id?: number;
    /** 关联的提示语ID */
    promptId?: number;
    /** 提示语标题 */
    promptTitle?: string;
    /** 提示语内容 */
    promptContent?: string;
    /** 实际使用的提示语 */
    usedContent?: string;
    /** AI模型响应内容 */
    responseContent?: string;
    /** 使用的AI模型 */
    model?: string;
    /** 使用时长（毫秒） */
    duration?: number;
    /** 输入Token数 */
    inputTokens?: number;
    /** 输出Token数 */
    outputTokens?: number;
    /** 是否成功 */
    success?: boolean;
    /** 错误信息 */
    errorMessage?: string;
}
//# sourceMappingURL=prompt-history-vo.d.ts.map