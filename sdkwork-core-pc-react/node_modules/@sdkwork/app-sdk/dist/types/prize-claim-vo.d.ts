/** 奖品领取结果 */
export interface PrizeClaimVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否领取成功 */
    success?: boolean;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品类型 */
    prizeType?: string;
    /** 领取时间 */
    claimTime?: string;
    /** 到账内容 */
    rewardDetails?: Record<string, unknown>;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=prize-claim-vo.d.ts.map