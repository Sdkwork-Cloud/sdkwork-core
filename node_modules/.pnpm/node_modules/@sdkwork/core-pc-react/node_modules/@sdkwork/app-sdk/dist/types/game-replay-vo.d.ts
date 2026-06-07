/** 游戏回放信息 */
export interface GameReplayVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 回放ID */
    replayId?: number;
    /** 回放编号 */
    replayNo?: string;
    /** 对局ID */
    matchId?: number;
    /** 房间ID */
    roomId?: number;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 回放标题 */
    title?: string;
    /** 回放状态 */
    status?: string;
    /** 是否公开 */
    publicVisible?: boolean;
    /** 是否允许分享 */
    allowShare?: boolean;
    /** 动作总数 */
    actionCount?: number;
    /** 关键帧数 */
    keyFrameCount?: number;
    /** 封面地址 */
    coverUrl?: string;
    /** 存储键 */
    storageKey?: string;
    /** 开始时间 */
    startedAt?: string;
    /** 结束时间 */
    endedAt?: string;
}
//# sourceMappingURL=game-replay-vo.d.ts.map