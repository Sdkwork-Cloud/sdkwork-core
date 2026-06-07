/** 任务奖励 */
export interface TaskRewardVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 奖励ID */
    rewardId?: string;
    /** 任务ID */
    taskId?: string;
    /** 奖励类型 */
    rewardType?: string;
    /** 奖励数量 */
    rewardAmount?: number;
    /** 状态: success/failed */
    status?: string;
    /** 消息 */
    message?: string;
    /** 领取时间 */
    claimedAt?: string;
}
//# sourceMappingURL=task-reward-vo.d.ts.map