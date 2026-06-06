/** 游戏挑战赛信息 */
export interface GameChallengeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 挑战ID */
    challengeId?: number;
    /** 挑战编号 */
    challengeNo?: string;
    /** 擂台ID */
    arenaId?: number;
    /** 挑战来源 */
    sourceType?: string;
    /** 玩法类型 */
    gameType?: string;
    /** 玩法模式编码 */
    gameModeCode?: string;
    /** 挑战状态 */
    status?: string;
    /** 挑战方用户ID */
    challengerUserId?: number;
    /** 被挑战方用户ID */
    targetUserId?: number;
    /** 获胜方用户ID */
    winnerUserId?: number;
    /** 失败方用户ID */
    loserUserId?: number;
    /** 单边押分 */
    stakeScore?: number;
    /** 来源榜单ID */
    leaderboardId?: number;
    /** 关联房间ID */
    roomId?: number;
    /** 关联对局ID */
    matchId?: number;
    /** 挑战留言 */
    reason?: string;
    /** 我的角色: challenger/target/viewer */
    myRole?: string;
    /** 当前用户是否可接受 */
    canAccept?: boolean;
    /** 当前用户是否可拒绝 */
    canReject?: boolean;
    /** 当前用户是否可取消 */
    canCancel?: boolean;
    /** 发起时间 */
    challengedAt?: string;
    /** 接受时间 */
    acceptedAt?: string;
    /** 结算时间 */
    settledAt?: string;
    /** 过期时间 */
    expiredAt?: string;
    /** 取消时间 */
    canceledAt?: string;
}
//# sourceMappingURL=game-challenge-vo.d.ts.map