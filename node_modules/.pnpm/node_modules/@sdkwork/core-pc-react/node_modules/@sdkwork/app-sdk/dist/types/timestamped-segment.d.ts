/** 时间戳段 */
export interface TimestampedSegment {
    /** 开始时间(毫秒) */
    startTime?: number;
    /** 结束时间(毫秒) */
    endTime?: number;
    /** 文本内容 */
    text?: string;
    /** 说话人ID */
    speakerId?: number;
    /** 置信度 */
    confidence?: number;
}
//# sourceMappingURL=timestamped-segment.d.ts.map