import { RiskItem } from './risk-item';
/** 账号风险检测响应 */
export interface AccountRiskVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: string;
    /** 设备ID */
    deviceId?: string;
    /** 风险等级 */
    riskLevel?: 'low' | 'medium' | 'high' | 'critical';
    /** 风险分数 */
    riskScore?: number;
    /** 检测到的风险项 */
    risks?: RiskItem[];
    /** 建议操作 */
    suggestion?: 'allow' | 'captcha' | 'block' | 'review';
    /** 是否需要二次验证 */
    needVerification?: boolean;
}
//# sourceMappingURL=account-risk-vo.d.ts.map