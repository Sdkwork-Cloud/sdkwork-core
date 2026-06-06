import { WordHit } from './word-hit';
/** 敏感词检测响应 */
export interface SensitiveWordsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否包含敏感词 */
    hasSensitiveWords?: boolean;
    /** 敏感词数量 */
    count?: number;
    /** 检测到的敏感词 */
    words?: WordHit[];
    /** 处理后的文本 */
    processedText?: string;
    /** 风险等级 */
    riskLevel?: string;
}
//# sourceMappingURL=sensitive-words-vo.d.ts.map