/** VIP每日奖励状态响应 */
export interface VipDailyRewardStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否可领取 */
    canClaim?: boolean;
    /** 今日是否已领取 */
    claimedToday?: boolean;
    /** 连续签到天数 */
    consecutiveDays?: number;
    /** 累计签到天数 */
    totalDays?: number;
}
//# sourceMappingURL=vip-daily-reward-status-vo.d.ts.map