/** 游戏战绩信息 */
export interface GameRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 对局ID */
    matchId?: number;
    /** 对局编号 */
    matchNo?: string;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 结果类型 */
    resultType?: 'PENDING' | 'WIN' | 'LOSE' | 'DRAW' | 'ESCAPE' | 'DISMISS';
    /** 名次 */
    rankNo?: number;
    /** 积分变化 */
    scoreDelta?: number;
    /** 等级分变化 */
    ratingDelta?: number;
    /** 筹码变化 */
    chipsDelta?: number;
    /** 是否计入榜单 */
    leaderboardEligible?: boolean;
    /** 回放ID */
    replayId?: number;
    /** 结算摘要 */
    settlementSummary?: string;
    /** 完成时间 */
    finishedAt?: string;
}
//# sourceMappingURL=game-record-vo.d.ts.map