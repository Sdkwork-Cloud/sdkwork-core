/** 游戏对局信息 */
export interface GameMatchVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 对局ID */
    matchId?: number;
    /** 对局编号 */
    matchNo?: string;
    /** 房间ID */
    roomId?: number;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 对局状态 */
    status?: 'CREATED' | 'RUNNING' | 'PAUSED' | 'SETTLING' | 'FINISHED' | 'ABORTED';
    /** 当前轮次 */
    currentRoundNo?: number;
    /** 总轮次 */
    maxRoundCount?: number;
    /** 当前行动座位 */
    currentTurnSeatNo?: number;
    /** 获胜用户ID */
    winnerUserId?: number;
    /** 是否计入榜单 */
    leaderboardEligible?: boolean;
    /** 结果是否已确认 */
    resultConfirmed?: boolean;
    /** 开始时间 */
    startedAt?: string;
    /** 结束时间 */
    endedAt?: string;
}
//# sourceMappingURL=game-match-vo.d.ts.map