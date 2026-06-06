import { ClawTaskExecutionStatus } from './claw-task-execution-status';
import { ClawTaskTriggerType } from './claw-task-trigger-type';
export interface ClawTaskReportForm {
    clawKey?: string;
    instanceCode?: string;
    taskKey: string;
    executionNo: string;
    triggerType?: ClawTaskTriggerType;
    status?: ClawTaskExecutionStatus;
    triggeredAt?: string;
    startedAt?: string;
    finishedAt?: string;
    durationMs?: number;
    retryCount?: number;
    traceId?: string;
    requestId?: string;
    resultSummary?: string;
    errorCode?: string;
    errorMessage?: string;
    logUrl?: string;
    metrics?: Record<string, unknown>;
    outputPayload?: Record<string, unknown>;
    sourceVersionId?: number;
}
//# sourceMappingURL=claw-task-report-form.d.ts.map