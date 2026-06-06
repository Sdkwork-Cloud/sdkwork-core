/** 奖励验证VO */
export interface RewardVerifyVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否验证通过 */
    verified?: boolean;
    /** 奖励ID */
    rewardId?: string;
    /** 奖励类型 */
    rewardType?: string;
    /** 奖励数量 */
    rewardAmount?: number;
    /** 消息 */
    message?: string;
    /** 验证令牌 */
    verificationToken?: string;
}
//# sourceMappingURL=reward-verify-vo.d.ts.map