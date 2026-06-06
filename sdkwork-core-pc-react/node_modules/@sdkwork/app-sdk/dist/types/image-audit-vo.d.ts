import { ImageDetectionDetail } from './image-detection-detail';
import { Region } from './region';
/** 图片审核响应 */
export interface ImageAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** 审核结果 */
    result?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 置信度 */
    confidence?: number;
    /** 检测详情 */
    details?: ImageDetectionDetail[];
    /** 违规区域坐标 */
    violationRegions?: Region[];
    /** 建议操作 */
    suggestion?: string;
}
//# sourceMappingURL=image-audit-vo.d.ts.map