/** 生成历史响应 */
export interface GenerationHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: string;
    /** 生成类型 */
    type?: string;
    /** 生成任务ID */
    taskId?: string;
    /** 生成标题 */
    title?: string;
    /** 生成描述 */
    description?: string;
    /** 生成状态 */
    status?: string;
    /** 生成耗时(秒) */
    duration?: number;
    /** 生成结果URL */
    resultUrl?: string;
    /** 生成结果预览 */
    resultPreview?: string;
    /** 生成开始时间 */
    startTime?: string;
    /** 生成完成时间 */
    endTime?: string;
    /** 使用的模型 */
    modelName?: string;
    /** 消耗的令牌 */
    tokenUsage?: number;
}
//# sourceMappingURL=generation-history-vo.d.ts.map