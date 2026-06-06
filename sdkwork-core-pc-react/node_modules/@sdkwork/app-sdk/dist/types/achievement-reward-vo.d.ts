/** 成就奖励响应 */
export interface AchievementRewardVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 奖励ID */
    id?: string;
    /** 奖励名称 */
    name?: string;
    /** 奖励类型：points/credits/badge */
    type?: string;
    /** 奖励数量 */
    amount?: number;
    /** 奖励描述 */
    description?: string;
    /** 奖励图标 */
    icon?: string;
    /** 奖励状态：pending/claimed */
    status?: string;
    /** 领取时间 */
    claimedAt?: string;
}
//# sourceMappingURL=achievement-reward-vo.d.ts.map