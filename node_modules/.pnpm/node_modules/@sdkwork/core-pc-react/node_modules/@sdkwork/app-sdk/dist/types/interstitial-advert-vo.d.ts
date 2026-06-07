/** 插屏广告VO */
export interface InterstitialAdvertVO {
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
    /** 插屏尺寸 */
    interstitialSize?: string;
    /** 显示时间 */
    displayTime?: number;
    /** 是否可跳过 */
    skipEnabled?: boolean;
    /** 跳过延迟 */
    skipDelay?: number;
}
//# sourceMappingURL=interstitial-advert-vo.d.ts.map