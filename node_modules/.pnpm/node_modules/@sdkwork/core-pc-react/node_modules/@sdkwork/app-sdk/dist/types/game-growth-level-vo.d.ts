/** 游戏成长等级阶梯 */
export interface GameGrowthLevelVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 成长账户类型 */
    accountType?: string;
    /** 玩法类型 */
    gameType?: string;
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 赛季标识 */
    seasonKey?: string;
    /** 等级序号 */
    levelNo?: number;
    /** 等级编码 */
    levelCode?: string;
    /** 等级名称 */
    levelName?: string;
    /** 等级称号 */
    title?: string;
    /** 徽章编码 */
    badgeCode?: string;
    /** 图标地址 */
    iconUrl?: string;
    /** 达到该等级所需累计经验 */
    requiredExp?: number;
    /** 该等级经验起始值 */
    expStartValue?: number;
    /** 该等级经验结束值 */
    expEndValue?: number;
    /** 等级说明 */
    description?: string;
    /** 奖励配置 */
    rewardConfig?: Record<string, unknown>;
    /** 权益配置 */
    benefitConfig?: Record<string, unknown>;
}
//# sourceMappingURL=game-growth-level-vo.d.ts.map