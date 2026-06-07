/** 游戏积分流水 */
export interface GameScoreRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 流水ID */
    recordId?: number;
    /** 玩法类型 */
    gameType?: string;
    /** 变更类型 */
    changeType?: string;
    /** 业务流水号 */
    bizNo?: string;
    /** 变更原因 */
    reason?: string;
    /** 房间ID */
    roomId?: number;
    /** 对局ID */
    matchId?: number;
    /** 积分变更前 */
    scoreBefore?: number;
    /** 积分变化 */
    scoreDelta?: number;
    /** 积分变更后 */
    scoreAfter?: number;
    /** 发生时间 */
    occurredAt?: string;
}
//# sourceMappingURL=game-score-record-vo.d.ts.map