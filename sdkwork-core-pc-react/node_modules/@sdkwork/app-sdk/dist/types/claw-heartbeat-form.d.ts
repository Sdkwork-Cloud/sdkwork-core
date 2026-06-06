import { ClawHealthStatus } from './claw-health-status';
import { ClawRuntimeState } from './claw-runtime-state';
export interface ClawHeartbeatForm {
    clawKey?: string;
    instanceCode: string;
    reportedAt?: string;
    healthStatus?: ClawHealthStatus;
    runtimeState?: ClawRuntimeState;
    cpuUsage?: number;
    memoryUsage?: number;
    diskUsage?: number;
    threadCount?: number;
    queueDepth?: number;
    activeTasks?: number;
    errorRate?: number;
    avgLatencyMs?: number;
    providerHealth?: Record<string, unknown>;
    toolHealth?: Record<string, unknown>;
    browserHealth?: Record<string, unknown>;
    mcpHealth?: Record<string, unknown>;
    lastSuccessTaskAt?: string;
    metrics?: Record<string, unknown>;
    configHash?: string;
    environmentHash?: string;
    currentConfigSnapshotId?: number;
    currentSourceVersionId?: number;
}
//# sourceMappingURL=claw-heartbeat-form.d.ts.map