import { DetectionTypeConfig } from './detection-type-config';
/** 审核策略响应 */
export interface AuditPolicyVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 策略ID */
    policyId?: string;
    /** 策略名称 */
    name?: string;
    /** 策略描述 */
    description?: string;
    /** 适用场景 */
    scenes?: string[];
    /** 检测类型配置 */
    detectionTypes?: DetectionTypeConfig[];
    /** 阈值配置 */
    thresholds?: Record<string, number>;
    /** 是否启用 */
    enabled?: boolean;
    /** 优先级 */
    priority?: number;
}
//# sourceMappingURL=audit-policy-vo.d.ts.map