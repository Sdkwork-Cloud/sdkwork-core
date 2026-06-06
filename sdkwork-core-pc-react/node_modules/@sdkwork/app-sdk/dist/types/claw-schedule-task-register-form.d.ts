import { ClawScheduleMode } from './claw-schedule-mode';
import { ClawScheduleTaskType } from './claw-schedule-task-type';
import { ClawTaskConcurrencyPolicy } from './claw-task-concurrency-policy';
import { ClawTaskMisfirePolicy } from './claw-task-misfire-policy';
export interface ClawScheduleTaskRegisterForm {
    clawKey?: string;
    instanceCode?: string;
    taskKey: string;
    taskName?: string;
    taskType?: ClawScheduleTaskType;
    scheduleMode?: ClawScheduleMode;
    cronExpression?: string;
    fixedRateMs?: number;
    fixedDelayMs?: number;
    timeZone?: string;
    taskEntrypoint?: string;
    taskHandler?: string;
    payloadSchema?: Record<string, unknown>;
    concurrencyPolicy?: ClawTaskConcurrencyPolicy;
    misfirePolicy?: ClawTaskMisfirePolicy;
    timeoutSeconds?: number;
    maxRetryCount?: number;
    enabled?: boolean;
    nextRunAt?: string;
    taskVersion?: string;
    sourceVersionId?: number;
}
//# sourceMappingURL=claw-schedule-task-register-form.d.ts.map