/** Game growth account */
export interface GameGrowthAccountVO {
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
    /** Current level number */
    currentLevelNo?: number;
    /** Current level code */
    currentLevelCode?: string;
    /** Current level name */
    currentLevelName?: string;
    /** Current title */
    currentTitle?: string;
    /** Current badge code */
    currentBadgeCode?: string;
    /** Current experience */
    currentExp?: number;
    /** Total experience */
    totalExp?: number;
    /** Current level start experience */
    currentLevelStartExp?: number;
    /** Next level required experience */
    nextLevelRequiredExp?: number;
    /** Experience required to next level */
    expToNextLevel?: number;
    /** Current progress percentage */
    progressPercent?: number;
    /** Peak level number */
    peakLevelNo?: number;
    /** Peak experience */
    peakExp?: number;
    /** Total level-up count */
    levelUpCount?: number;
    /** Claimed reward count */
    rewardClaimedCount?: number;
    /** Last experience gain time */
    lastGainAt?: string;
    /** Last level-up time */
    lastLevelUpAt?: string;
    /** Last claimed level number */
    lastClaimedLevelNo?: number;
    /** Last reward claim time */
    lastRewardClaimedAt?: string;
    /** Last reward issue time */
    lastRewardIssuedAt?: string;
    /** Last claimed reward summary */
    lastClaimedRewardSummary?: Record<string, unknown>;
}
//# sourceMappingURL=game-growth-account-vo.d.ts.map