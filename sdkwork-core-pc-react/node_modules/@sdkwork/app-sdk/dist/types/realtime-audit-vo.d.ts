/** 实时内容审核响应 */
export interface RealtimeAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 流ID */
    streamId?: string;
    /** 任务ID */
    taskId?: string;
    /** 任务状态 */
    status?: string;
    /** 视频检测开关 */
    videoEnabled?: boolean;
    /** 音频检测开关 */
    audioEnabled?: boolean;
    /** WebSocket推送地址 */
    pushUrl?: string;
    /** 开始时间 */
    startTime?: string;
    /** 预计结束时间 */
    estimatedEndTime?: string;
}
//# sourceMappingURL=realtime-audit-vo.d.ts.map