/** 会话统计信息 */
export interface SessionStatsVO {
    /** 总消息数 */
    totalMessages?: number;
    /** 用户消息数 */
    userMessages?: number;
    /** AI消息数 */
    aiMessages?: number;
    /** 总使用token数 */
    totalTokens?: number;
    /** 平均响应时间（毫秒） */
    avgResponseTime?: number;
    /** 总会话时长（分钟） */
    totalDuration?: number;
}
//# sourceMappingURL=session-stats-vo.d.ts.map