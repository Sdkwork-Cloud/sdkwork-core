import { FrameDetection } from './frame-detection';
/** 视频审核状态响应 */
export interface VideoAuditStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 任务ID */
    taskId?: string;
    /** 任务状态 */
    status?: string;
    /** 进度百分比 */
    progress?: number;
    /** 已处理时长(秒) */
    processedDuration?: number;
    /** 总时长(秒) */
    totalDuration?: number;
    /** 检测结果 */
    detections?: FrameDetection[];
    /** 预计完成时间 */
    estimatedCompleteTime?: string;
}
//# sourceMappingURL=video-audit-status-vo.d.ts.map