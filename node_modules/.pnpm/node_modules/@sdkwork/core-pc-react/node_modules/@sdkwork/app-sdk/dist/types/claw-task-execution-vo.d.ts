/** Claw task execution response. */
export interface ClawTaskExecutionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    executionId?: number;
    scheduleTaskId?: number;
    executionNo?: string;
    status?: string;
    triggeredAt?: string;
    finishedAt?: string;
    resultSummary?: string;
    errorMessage?: string;
}
//# sourceMappingURL=claw-task-execution-vo.d.ts.map