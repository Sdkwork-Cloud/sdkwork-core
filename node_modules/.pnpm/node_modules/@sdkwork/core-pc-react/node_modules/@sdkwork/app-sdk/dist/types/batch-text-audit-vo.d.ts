import { TextAuditItem } from './text-audit-item';
/** 批量文本审核响应 */
export interface BatchTextAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 批次ID */
    batchId?: string;
    /** 审核结果列表 */
    results?: TextAuditItem[];
    /** 总体状态 */
    overallStatus?: string;
    /** 检测数量 */
    totalCount?: number;
    /** 通过数量 */
    passCount?: number;
    /** 拒绝数量 */
    rejectCount?: number;
}
//# sourceMappingURL=batch-text-audit-vo.d.ts.map