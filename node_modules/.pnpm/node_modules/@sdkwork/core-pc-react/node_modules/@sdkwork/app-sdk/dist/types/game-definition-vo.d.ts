/** 玩法信息 */
export interface GameDefinitionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 玩法定义ID */
    definitionId?: number;
    /** 玩法类型 */
    gameType?: 'INTERNATIONAL_CHESS' | 'CHINESE_CHESS' | 'GOMOKU' | 'JUNQI' | 'LANDLORD' | 'SHENG_JI' | 'TUO_LA_JI' | 'TEXAS_HOLDEM' | 'MAHJONG' | 'CUSTOM';
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 玩法名称 */
    name?: string;
    /** 玩法分类 */
    category?: string;
    /** 是否支持好友房 */
    supportsFriendRoom?: boolean;
    /** 是否支持赛事 */
    supportsTournament?: boolean;
    /** 是否支持回放 */
    supportsReplay?: boolean;
    /** 难度等级 */
    difficultyLevel?: number;
    /** 支持榜单周期 */
    supportedLeaderboardPeriods?: string[];
}
//# sourceMappingURL=game-definition-vo.d.ts.map