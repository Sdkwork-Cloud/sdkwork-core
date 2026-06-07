import { ClawScheduleTaskVO } from './claw-schedule-task-vo';
/** Claw bootstrap response. */
export interface ClawBootstrapVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    clawId?: number;
    clawUserId?: number;
    clawKey?: string;
    displayName?: string;
    appId?: number;
    appName?: string;
    defaultConfig?: Record<string, unknown>;
    opsPolicy?: Record<string, unknown>;
    currentConfigSnapshotId?: number;
    currentConfigVersionName?: string;
    currentConfigHash?: string;
    identityConfig?: Record<string, unknown>;
    runtimeConfig?: Record<string, unknown>;
    providerConfig?: Record<string, unknown>;
    schedulerConfig?: Record<string, unknown>;
    securityConfig?: Record<string, unknown>;
    currentSourceVersionId?: number;
    currentVersionName?: string;
    currentSemanticVersion?: string;
    currentReleaseChannel?: string;
    currentSourceType?: string;
    scheduleTasks?: ClawScheduleTaskVO[];
}
//# sourceMappingURL=claw-bootstrap-vo.d.ts.map