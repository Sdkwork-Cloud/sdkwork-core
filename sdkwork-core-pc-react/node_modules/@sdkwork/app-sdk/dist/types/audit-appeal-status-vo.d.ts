/** 申诉状态响应 */
export interface AuditAppealStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 申诉ID */
    appealId?: string;
    /** 审核记录ID */
    recordId?: string;
    /** 当前状态 */
    currentStatus?: string;
    /** 状态描述 */
    statusDescription?: string;
    /** 处理进度 */
    progress?: number;
    /** 预计完成时间 */
    estimatedCompleteTime?: string;
    /** 处理结果 */
    result?: string;
    /** 是否可以补充材料 */
    canAddEvidence?: boolean;
    /** 是否可以撤销 */
    canCancel?: boolean;
}
//# sourceMappingURL=audit-appeal-status-vo.d.ts.map