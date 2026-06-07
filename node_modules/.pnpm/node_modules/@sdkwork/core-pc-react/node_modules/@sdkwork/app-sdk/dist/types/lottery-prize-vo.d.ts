/** 中奖奖品记录 */
export interface LotteryPrizeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    recordId?: string;
    /** 活动ID */
    lotteryId?: string;
    /** 活动标题 */
    lotteryTitle?: string;
    /** 奖品ID */
    prizeId?: string;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品图片 */
    prizeImage?: string;
    /** 奖品类型 */
    prizeType?: string;
    /** 是否大奖 */
    isGrandPrize?: boolean;
    /** 中奖时间 */
    winTime?: string;
    /** 领取状态: unclaimed/claimed/expired */
    claimStatus?: string;
    /** 领取时间 */
    claimTime?: string;
    /** 过期时间 */
    expireTime?: string;
    /** 是否可领取 */
    canClaim?: boolean;
}
//# sourceMappingURL=lottery-prize-vo.d.ts.map