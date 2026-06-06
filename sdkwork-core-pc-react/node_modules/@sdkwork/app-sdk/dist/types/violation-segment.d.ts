/** 违规片段 */
export interface ViolationSegment {
    /** 开始时间(秒) */
    startTime?: number;
    /** 结束时间(秒) */
    endTime?: number;
    /** 违规类型 */
    violationType?: string;
    /** 文本内容 */
    text?: string;
    /** 置信度 */
    confidence?: number;
}
//# sourceMappingURL=violation-segment.d.ts.map