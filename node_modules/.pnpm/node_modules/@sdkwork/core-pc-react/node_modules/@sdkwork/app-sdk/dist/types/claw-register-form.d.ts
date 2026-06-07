import { ClawEnvironmentType } from './claw-environment-type';
export interface ClawRegisterForm {
    clawKey?: string;
    instanceCode: string;
    instanceName?: string;
    registrationSource?: string;
    environmentKey: string;
    environmentName?: string;
    environmentType?: ClawEnvironmentType;
    region?: string;
    zone?: string;
    clusterName?: string;
    namespace?: string;
    hostName?: string;
    hostIp?: string;
    internalAddress?: string;
    externalAddress?: string;
    port?: number;
    processId?: number;
    containerId?: string;
    podName?: string;
    osName?: string;
    osVersion?: string;
    cpuArch?: string;
    runtimeName?: string;
    runtimeVersion?: string;
    containerRuntime?: string;
    networkInfo?: Record<string, unknown>;
    resourceQuota?: Record<string, unknown>;
    labels?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
    runtimeMetadata?: Record<string, unknown>;
    configHash?: string;
    environmentHash?: string;
    currentConfigSnapshotId?: number;
    currentSourceVersionId?: number;
}
//# sourceMappingURL=claw-register-form.d.ts.map