/** 游戏荣誉信息 */
export interface GameHonorVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 荣誉ID */
    honorId?: number;
    /** 荣誉标题 */
    title?: string;
    /** 荣誉副标题 */
    subtitle?: string;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 赛季标识 */
    seasonKey?: string;
    /** 荣誉来源 */
    sourceType?: 'LEADERBOARD' | 'TOURNAMENT' | 'SEASON' | 'ACTIVITY' | 'SYSTEM';
    /** 荣誉状态 */
    status?: 'PENDING' | 'GRANTED' | 'EXPIRED' | 'REVOKED';
    /** 榜单或赛事名次 */
    rankNo?: number;
    /** 徽章编码 */
    badgeCode?: string;
    /** 发放时间 */
    grantedAt?: string;
}
//# sourceMappingURL=game-honor-vo.d.ts.map