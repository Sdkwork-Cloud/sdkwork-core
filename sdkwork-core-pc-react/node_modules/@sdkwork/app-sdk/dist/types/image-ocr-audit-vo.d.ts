import { TextAuditVO } from './text-audit-vo';
import { TextBlock } from './text-block';
/** 图片OCR审核响应 */
export interface ImageOcrAuditVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 审核任务ID */
    taskId?: string;
    /** OCR识别文本 */
    ocrText?: string;
    /** 识别出的文字块 */
    textBlocks?: TextBlock[];
    /** 文本审核结果 */
    textAuditResult?: TextAuditVO;
    /** 综合结果 */
    overallResult?: string;
}
//# sourceMappingURL=image-ocr-audit-vo.d.ts.map