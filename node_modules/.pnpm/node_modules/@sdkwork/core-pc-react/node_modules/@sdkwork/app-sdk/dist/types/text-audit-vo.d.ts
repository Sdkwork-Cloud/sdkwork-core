import { DetectionDetail } from './detection-detail';
/** 文本审核响应 */
export interface TextAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** 审核结果 */
    result?: 'pass' | 'reject' | 'review' | 'suspect';
    /** 风险等级 */
    riskLevel?: 'low' | 'medium' | 'high';
    /** 置信度 */
    confidence?: number;
    /** 检测详情 */
    details?: DetectionDetail[];
    /** 敏感词列表 */
    sensitiveWords?: string[];
    /** 建议操作 */
    suggestion?: 'allow' | 'block' | 'review' | 'mask';
    /** 处理后的文本 */
    processedText?: string;
}
//# sourceMappingURL=text-audit-vo.d.ts.map