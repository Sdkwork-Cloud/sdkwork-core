import { TextAuditVO } from './text-audit-vo';
import { TimestampedSegment } from './timestamped-segment';
/** 语音转文字审核响应 */
export interface AudioAsrAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** 完整文本 */
    fullText?: string;
    /** 带时间戳的文本段 */
    segments?: TimestampedSegment[];
    /** 文本审核结果 */
    textAuditResult?: TextAuditVO;
    /** 综合结果 */
    overallResult?: string;
    /** 语言类型 */
    language?: string;
}
//# sourceMappingURL=audio-asr-audit-vo.d.ts.map