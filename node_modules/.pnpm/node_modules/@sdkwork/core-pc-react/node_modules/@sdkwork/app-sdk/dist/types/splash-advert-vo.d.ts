/** 开屏广告VO */
export interface SplashAdvertVO {
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
    /** 显示时长 */
    displayDuration?: number;
    /** 是否可跳过 */
    skipEnabled?: boolean;
    /** 跳过延迟 */
    skipDelay?: number;
    /** 背景颜色 */
    backgroundColor?: string;
    /** Logo URL */
    logoUrl?: string;
}
//# sourceMappingURL=splash-advert-vo.d.ts.map