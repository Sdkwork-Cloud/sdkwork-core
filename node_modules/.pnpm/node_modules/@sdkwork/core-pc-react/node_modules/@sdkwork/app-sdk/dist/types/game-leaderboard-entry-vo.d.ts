/** 游戏排行榜明细 */
export interface GameLeaderboardEntryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: number;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatarUrl?: string;
    /** 排名 */
    rankNo?: number;
    /** 成绩值 */
    scoreValue?: number;
    /** 展示值 */
    displayValue?: string;
    /** 徽章编码 */
    badgeCode?: string;
}
//# sourceMappingURL=game-leaderboard-entry-vo.d.ts.map