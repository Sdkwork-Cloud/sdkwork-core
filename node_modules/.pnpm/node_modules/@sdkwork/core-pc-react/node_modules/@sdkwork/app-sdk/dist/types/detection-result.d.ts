/** 检测结果 */
export interface DetectionResult {
    /** 检测类型 */
    type?: string;
    /** 是否命中 */
    hit?: boolean;
    /** 置信度 */
    confidence?: number;
    /** 关键词/特征 */
    keywords?: string[];
}
//# sourceMappingURL=detection-result.d.ts.map