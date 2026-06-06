/** 广告设置VO */
export interface AdvertSettingsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 是否个性化 */
    personalized?: boolean;
    /** 每日最大广告数 */
    maxDailyAds?: number;
    /** 广告拦截级别 */
    adBlockLevel?: string;
    /** 奖励视频是否启用 */
    rewardVideoEnabled?: boolean;
    /** 插屏广告是否启用 */
    interstitialEnabled?: boolean;
    /** Banner广告是否启用 */
    bannerEnabled?: boolean;
    /** 最后更新时间 */
    lastUpdated?: string;
}
//# sourceMappingURL=advert-settings-vo.d.ts.map