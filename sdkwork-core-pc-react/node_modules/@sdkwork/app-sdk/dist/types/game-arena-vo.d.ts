/** 游戏擂台信息 */
export interface GameArenaVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 擂台ID */
    arenaId?: number;
    /** 擂台编号 */
    arenaNo?: string;
    /** 擂台名称 */
    name?: string;
    /** 擂台描述 */
    description?: string;
    /** 玩法类型 */
    gameType?: string;
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 擂台状态 */
    status?: string;
    /** 创建擂主用户ID */
    ownerUserId?: number;
    /** 当前擂主用户ID */
    currentChampionUserId?: number;
    /** 当前进行中挑战ID */
    currentChallengeId?: number;
    /** 擂台押分 */
    stakeScore?: number;
    /** 总挑战次数 */
    totalChallengeCount?: number;
    /** 守擂成功次数 */
    successfulDefenseCount?: number;
    /** 守擂失败次数 */
    failedDefenseCount?: number;
    /** 当前守擂连胜 */
    currentDefenseStreak?: number;
    /** 最佳守擂连胜 */
    bestDefenseStreak?: number;
    /** 累计奖励积分 */
    totalRewardScore?: number;
    /** 当前用户是否为擂主 */
    isChampion?: boolean;
    /** 当前用户是否可以挑战 */
    canChallenge?: boolean;
    /** 开擂时间 */
    openedAt?: string;
    /** 最近挑战时间 */
    lastChallengeAt?: string;
    /** 最近结算时间 */
    lastSettledAt?: string;
    /** 关闭时间 */
    closedAt?: string;
}
//# sourceMappingURL=game-arena-vo.d.ts.map