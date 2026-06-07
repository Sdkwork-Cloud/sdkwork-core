import { AudioAuditVO } from './audio-audit-vo';
import { KeyFrameResult } from './key-frame-result';
/** 视频审核响应 */
export interface VideoAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** 任务状态 */
    status?: 'pending' | 'processing' | 'completed' | 'failed';
    /** 视频URL */
    videoUrl?: string;
    /** 视频时长(秒) */
    duration?: number;
    /** 审核结果 */
    result?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 关键帧检测结果 */
    keyFrameResults?: KeyFrameResult[];
    /** 语音检测结果 */
    audioResult?: AudioAuditVO;
    /** 建议操作 */
    suggestion?: string;
}
//# sourceMappingURL=video-audit-vo.d.ts.map