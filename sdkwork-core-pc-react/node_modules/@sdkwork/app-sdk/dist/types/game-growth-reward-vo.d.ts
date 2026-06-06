/** Game growth reward */
export interface GameGrowthRewardVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Growth account type */
    accountType?: string;
    /** Game type */
    gameType?: string;
    /** Game mode code */
    gameModeCode?: string;
    /** Season key */
    seasonKey?: string;
    /** Level number */
    levelNo?: number;
    /** Level code */
    levelCode?: string;
    /** Level name */
    levelName?: string;
    /** Level title */
    title?: string;
    /** Badge code */
    badgeCode?: string;
    /** Required experience for the level */
    requiredExp?: number;
    /** Reward configuration */
    rewardConfig?: Record<string, unknown>;
    /** Whether the reward has been reached */
    reached?: boolean;
    /** Whether the reward can be claimed */
    claimable?: boolean;
    /** Whether the reward has been claimed */
    claimed?: boolean;
    /** Claim time */
    claimedAt?: string;
    /** Reward issue time */
    rewardIssuedAt?: string;
    /** Reward summary */
    rewardSummary?: Record<string, unknown>;
}
//# sourceMappingURL=game-growth-reward-vo.d.ts.map