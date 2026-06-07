/** 广告VO */
export interface AdvertVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 广告ID */
    advertId?: string;
    /** 广告名称 */
    advertName?: string;
    /** 广告类型 */
    advertType?: string;
    /** 广告位ID */
    positionId?: string;
    /** 创意URL */
    creativeUrl?: string;
    /** 落地页URL */
    landingUrl?: string;
    /** 优先级 */
    priority?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 点击次数 */
    clickCount?: number;
    /** 展示次数 */
    impressionCount?: number;
}
//# sourceMappingURL=advert-vo.d.ts.map