/** 游戏玩家主页信息 */
export interface GamePlayerProfileVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: number;
    /** 玩法类型 */
    gameType?: string;
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 昵称 */
    nickname?: string;
    /** 当前积分 */
    score?: number;
    /** 当前等级分 */
    ratingScore?: number;
    /** 胜率 */
    winRate?: number;
    /** 总对局数 */
    totalMatchCount?: number;
    /** 胜场数 */
    winCount?: number;
    /** 最佳连胜 */
    bestWinStreak?: number;
    /** 历史最佳日榜名次 */
    bestDailyRankNo?: number;
    /** 历史最佳周榜名次 */
    bestWeeklyRankNo?: number;
    /** 历史最佳月榜名次 */
    bestMonthlyRankNo?: number;
    /** 荣誉数量 */
    honorCount?: number;
    /** 平台等级 */
    platformLevelNo?: number;
    /** 平台等级名称 */
    platformLevelName?: string;
    /** 平台称号 */
    platformTitle?: string;
    /** 平台徽章编码 */
    platformBadgeCode?: string;
    /** 平台当前经验 */
    platformCurrentExp?: number;
    /** 平台累计经验 */
    platformTotalExp?: number;
    /** 平台升级进度百分比 */
    platformProgressPercent?: number;
    /** 平台距下一等级经验 */
    platformExpToNextLevel?: number;
    /** 玩法熟练等级 */
    gameLevelNo?: number;
    /** 玩法熟练等级名称 */
    gameLevelName?: string;
    /** 玩法熟练称号 */
    gameTitle?: string;
    /** 玩法熟练徽章编码 */
    gameBadgeCode?: string;
    /** 玩法当前经验 */
    gameCurrentExp?: number;
    /** 玩法累计经验 */
    gameTotalExp?: number;
    /** 玩法升级进度百分比 */
    gameProgressPercent?: number;
    /** 玩法距下一等级经验 */
    gameExpToNextLevel?: number;
    /** 挑战总场次 */
    challengeTotalCount?: number;
    /** 挑战胜场 */
    challengeWinCount?: number;
    /** 挑战负场 */
    challengeLoseCount?: number;
    /** 攻擂成功次数 */
    arenaAttackWinCount?: number;
    /** 守擂成功次数 */
    arenaDefenseWinCount?: number;
    /** 守擂失败次数 */
    arenaDefenseLoseCount?: number;
    /** 最佳守擂连胜 */
    arenaBestDefenseStreak?: number;
    /** 最近对局时间 */
    lastMatchAt?: string;
}
//# sourceMappingURL=game-player-profile-vo.d.ts.map