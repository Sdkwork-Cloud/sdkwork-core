/** 游戏赛事信息 */
export interface GameTournamentVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 赛事ID */
    tournamentId?: number;
    /** 赛事编号 */
    tournamentNo?: string;
    /** 赛事名称 */
    name?: string;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 赛事类型 */
    tournamentType?: 'LADDER' | 'CHALLENGE' | 'KNOCKOUT' | 'ROUND_ROBIN' | 'TEAM' | 'FESTIVAL';
    /** 赛事状态 */
    status?: 'DRAFT' | 'REGISTERING' | 'RUNNING' | 'SETTLING' | 'FINISHED' | 'CANCELED';
    /** 参与人数 */
    totalParticipantCount?: number;
    /** 是否排位赛事 */
    ranked?: boolean;
    /** 是否启用回放 */
    replayEnabled?: boolean;
    /** 开始时间 */
    startAt?: string;
    /** 结束时间 */
    endAt?: string;
}
//# sourceMappingURL=game-tournament-vo.d.ts.map