import { AnomalyPattern } from './anomaly-pattern';
import { FrequencyStats } from './frequency-stats';
/** 行为风险检测响应 */
export interface BehaviorRiskVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: string;
    /** 行为类型 */
    behaviorType?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 风险分数 */
    riskScore?: number;
    /** 异常行为模式 */
    anomalies?: AnomalyPattern[];
    /** 频率统计 */
    frequencyStats?: FrequencyStats;
    /** 建议操作 */
    suggestion?: string;
    /** 限制措施 */
    restrictions?: string[];
}
//# sourceMappingURL=behavior-risk-vo.d.ts.map