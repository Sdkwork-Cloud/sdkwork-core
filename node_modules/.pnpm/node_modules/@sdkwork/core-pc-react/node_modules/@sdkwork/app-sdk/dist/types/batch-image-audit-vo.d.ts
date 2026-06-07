import { ImageAuditItem } from './image-audit-item';
/** 批量图片审核响应 */
export interface BatchImageAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 批次ID */
    batchId?: string;
    /** 审核结果列表 */
    results?: ImageAuditItem[];
    /** 总体状态 */
    overallStatus?: string;
    /** 图片总数 */
    totalCount?: number;
    /** 通过数量 */
    passCount?: number;
    /** 拒绝数量 */
    rejectCount?: number;
}
//# sourceMappingURL=batch-image-audit-vo.d.ts.map