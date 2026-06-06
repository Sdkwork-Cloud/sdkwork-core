/** 游戏成长流水 */
export interface GameGrowthRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 流水ID */
    recordId?: number;
    /** 成长账户类型 */
    accountType?: string;
    /** 玩法类型 */
    gameType?: string;
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 成长来源类型 */
    sourceType?: string;
    /** 业务幂等号 */
    bizNo?: string;
    /** 变化原因 */
    reason?: string;
    /** 房间ID */
    roomId?: number;
    /** 对局ID */
    matchId?: number;
    /** 经验变化 */
    expDelta?: number;
    /** 变更后经验 */
    expAfter?: number;
    /** 变更前等级 */
    levelNoBefore?: number;
    /** 变更后等级 */
    levelNoAfter?: number;
    /** 是否升级 */
    levelUp?: boolean;
    /** 发生时间 */
    occurredAt?: string;
}
//# sourceMappingURL=game-growth-record-vo.d.ts.map