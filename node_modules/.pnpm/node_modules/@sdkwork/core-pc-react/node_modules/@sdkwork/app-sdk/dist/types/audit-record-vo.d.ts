/** 审核记录响应 */
export interface AuditRecordVO {
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
    /** 内容预览 */
    contentPreview?: string;
    /** 审核结果 */
    result?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 检测类型 */
    checkTypes?: string[];
    /** 违规类型 */
    violationTypes?: string[];
    /** 处理时间 */
    auditTime?: string;
    /** 处理时长(毫秒) */
    processTime?: number;
}
//# sourceMappingURL=audit-record-vo.d.ts.map