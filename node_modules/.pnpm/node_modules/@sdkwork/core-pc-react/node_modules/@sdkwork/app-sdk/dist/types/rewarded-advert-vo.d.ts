/** 奖励广告VO */
export interface RewardedAdvertVO {
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
    /** 奖励类型 */
    rewardType?: string;
    /** 奖励数量 */
    rewardAmount?: number;
    /** 视频时长 */
    videoDuration?: number;
    /** 是否可跳过 */
    skipEnabled?: boolean;
    /** 奖励消息 */
    rewardMessage?: string;
}
//# sourceMappingURL=rewarded-advert-vo.d.ts.map