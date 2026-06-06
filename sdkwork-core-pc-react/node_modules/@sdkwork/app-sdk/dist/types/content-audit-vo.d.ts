import { AudioAuditVO } from './audio-audit-vo';
import { AuditResultItem } from './audit-result-item';
import { ImageAuditVO } from './image-audit-vo';
import { TextAuditVO } from './text-audit-vo';
import { VideoAuditVO } from './video-audit-vo';
/** 综合内容审核响应 */
export interface ContentAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** 内容ID */
    contentId?: string;
    /** 综合审核结果 */
    overallResult?: string;
    /** 风险等级 */
    riskLevel?: string;
    /** 各类型审核结果 */
    results?: Record<string, AuditResultItem>;
    /** 文本审核结果 */
    textResult?: TextAuditVO;
    /** 图片审核结果列表 */
    imageResults?: ImageAuditVO[];
    /** 视频审核结果 */
    videoResult?: VideoAuditVO;
    /** 音频审核结果 */
    audioResult?: AudioAuditVO;
    /** 建议操作 */
    suggestion?: string;
}
//# sourceMappingURL=content-audit-vo.d.ts.map