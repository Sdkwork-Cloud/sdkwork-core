import { ReplacementPosition } from './replacement-position';
/** 文本替换建议响应 */
export interface TextSuggestVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 原始文本 */
    originalText?: string;
    /** 建议文本 */
    suggestedText?: string;
    /** 替换次数 */
    replacementCount?: number;
    /** 替换位置 */
    positions?: ReplacementPosition[];
    /** 其他建议 */
    alternativeSuggestions?: string[];
}
//# sourceMappingURL=text-suggest-vo.d.ts.map