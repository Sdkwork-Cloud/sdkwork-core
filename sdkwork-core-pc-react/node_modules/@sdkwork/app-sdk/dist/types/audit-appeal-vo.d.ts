/** 审核申诉响应 */
export interface AuditAppealVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 申诉ID */
    appealId?: string;
    /** 记录ID */
    recordId?: string;
    /** 申诉原因 */
    reason?: string;
    /** 补充说明 */
    description?: string;
    /** 证明材料URL */
    evidenceUrl?: string;
    /** 申诉状态 */
    status?: 'pending' | 'processing' | 'approved' | 'rejected';
    /** 处理结果 */
    result?: string;
    /** 处理意见 */
    comment?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 处理时间 */
    processTime?: string;
}
//# sourceMappingURL=audit-appeal-vo.d.ts.map