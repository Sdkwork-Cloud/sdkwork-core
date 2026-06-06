/** 任务信息 */
export interface TaskVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 任务ID */
    taskId?: string;
    /** 任务名称 */
    taskName?: string;
    /** 任务类型: daily/weekly/achievement */
    taskType?: string;
    /** 状态: pending/completed/claimed */
    status?: string;
    /** 进度 */
    progress?: number;
    /** 总进度 */
    total?: number;
    /** 奖励类型 */
    rewardType?: string;
    /** 奖励数量 */
    rewardAmount?: number;
    /** 过期时间 */
    expireAt?: string;
}
//# sourceMappingURL=task-vo.d.ts.map