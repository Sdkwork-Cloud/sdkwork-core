import { DetectionResult } from './detection-result';
/** 审核记录详情响应 */
export interface AuditRecordDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    recordId?: string;
    /** 内容ID */
    contentId?: string;
    /** 内容类型 */
    contentType?: string;
    /** 原始内容 */
    originalContent?: string;
    /** 处理后内容 */
    processedContent?: string;
    /** 用户ID */
    userId?: string;
    /** 审核结果 */
    result?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 置信度 */
    confidence?: number;
    /** 详细检测结果 */
    detectionResults?: DetectionResult[];
    /** 检测类型 */
    checkTypes?: string[];
    /** 场景类型 */
    scene?: string;
    /** 设备信息 */
    deviceInfo?: Record<string, unknown>;
    /** IP地址 */
    ipAddress?: string;
    /** 地理位置 */
    location?: string;
    /** 审核时间 */
    auditTime?: string;
    /** 处理时长(毫秒) */
    processTime?: number;
    /** 是否申诉 */
    hasAppeal?: boolean;
}
//# sourceMappingURL=audit-record-detail-vo.d.ts.map