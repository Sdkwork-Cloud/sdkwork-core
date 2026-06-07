/** 游戏动作提交结果 */
export interface GameActionResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 对局ID */
    matchId?: number;
    /** 是否接收成功 */
    accepted?: boolean;
    /** 动作流水号 */
    actionSeqNo?: number;
    /** 下一个行动座位 */
    nextTurnSeatNo?: number;
    /** 当前对局状态 */
    status?: string;
    /** 结果说明 */
    message?: string;
    /** 动作接收时间 */
    actionAt?: string;
}
//# sourceMappingURL=game-action-result-vo.d.ts.map