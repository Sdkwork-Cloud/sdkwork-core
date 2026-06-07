/** 敏感词命中 */
export interface WordHit {
    /** 敏感词 */
    word?: string;
    /** 位置起始索引 */
    startIndex?: number;
    /** 位置结束索引 */
    endIndex?: number;
    /** 敏感词类别 */
    category?: string;
    /** 严重程度 */
    severity?: string;
}
//# sourceMappingURL=word-hit.d.ts.map