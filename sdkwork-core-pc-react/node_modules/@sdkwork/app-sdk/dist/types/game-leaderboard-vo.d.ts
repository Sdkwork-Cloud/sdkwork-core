import { GameLeaderboardEntryVO } from './game-leaderboard-entry-vo';
/** 游戏排行榜信息 */
export interface GameLeaderboardVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 榜单ID */
    leaderboardId?: number;
    /** 榜单名称 */
    name?: string;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 排行类型 */
    rankingType?: 'SCORE' | 'RATING' | 'WIN_RATE' | 'WIN_COUNT' | 'STREAK' | 'PROFIT';
    /** 榜单周期 */
    periodType?: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'QUARTER' | 'YEAR' | 'SEASON';
    /** 榜单范围 */
    scopeType?: 'GLOBAL' | 'GAME' | 'MODE' | 'FRIEND' | 'CLUB' | 'REGION' | 'TOURNAMENT';
    /** 周期开始时间 */
    periodStartAt?: string;
    /** 周期结束时间 */
    periodEndAt?: string;
    /** 我的名次 */
    myRank?: number;
    /** 参与人数 */
    totalParticipantCount?: number;
    /** 榜单头部明细 */
    entries?: GameLeaderboardEntryVO[];
}
//# sourceMappingURL=game-leaderboard-vo.d.ts.map