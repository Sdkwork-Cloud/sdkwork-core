import { ViolationSegment } from './violation-segment';
/** 音频审核响应 */
export interface AudioAuditVO {
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
    /** 音频时长(秒) */
    duration?: number;
    /** 语音转文字结果 */
    transcript?: string;
    /** 违规时间段 */
    violationSegments?: ViolationSegment[];
    /** 建议操作 */
    suggestion?: string;
}
//# sourceMappingURL=audio-audit-vo.d.ts.map