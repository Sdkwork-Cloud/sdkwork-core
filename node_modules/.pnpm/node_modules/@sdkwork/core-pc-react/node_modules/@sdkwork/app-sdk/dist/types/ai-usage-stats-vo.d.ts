/** AI使用统计VO */
export interface AiUsageStatsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 统计ID */
    statsId?: string;
    /** 模型名称 */
    modelName?: string;
    /** 提示词Token数 */
    promptTokens?: number;
    /** 完成Token数 */
    completionTokens?: number;
    /** 总Token数 */
    totalTokens?: number;
    /** 请求次数 */
    requestCount?: number;
    /** 错误次数 */
    errorCount?: number;
    /** 日期 */
    date?: string;
    /** 用户ID */
    userId?: string;
}
//# sourceMappingURL=ai-usage-stats-vo.d.ts.map