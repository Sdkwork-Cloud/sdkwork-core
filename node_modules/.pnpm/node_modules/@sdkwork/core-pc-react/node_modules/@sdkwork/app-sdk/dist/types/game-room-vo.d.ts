/** 游戏房间信息 */
export interface GameRoomVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 房间ID */
    roomId?: number;
    /** 房间号 */
    roomNo?: string;
    /** 房间名称 */
    name?: string;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 房间类型 */
    roomType?: 'MATCHMAKING' | 'CLASSIC' | 'FRIEND' | 'TOURNAMENT' | 'PRACTICE' | 'CLUB';
    /** 房间状态 */
    status?: 'WAITING' | 'READY' | 'PLAYING' | 'SETTLING' | 'FINISHED' | 'DISMISSED' | 'EXPIRED';
    /** 当前人数 */
    currentPlayerCount?: number;
    /** 座位数 */
    seatCount?: number;
    /** 是否排位房 */
    ranked?: boolean;
    /** 是否允许观战 */
    allowSpectator?: boolean;
    /** 是否计入榜单 */
    leaderboardEligible?: boolean;
    /** 是否启用回放 */
    replayEnabled?: boolean;
    /** 开局时间 */
    startedAt?: string;
}
//# sourceMappingURL=game-room-vo.d.ts.map