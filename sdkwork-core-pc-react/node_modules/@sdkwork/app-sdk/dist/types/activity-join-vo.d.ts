/** 活动参与结果 */
export interface ActivityJoinVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 参与记录ID */
    recordId?: string;
    /** 是否参与成功 */
    success?: boolean;
    /** 参与结果 */
    result?: string;
    /** 获得的奖励 */
    rewards?: Record<string, unknown>;
    /** 剩余参与次数 */
    remainingCount?: number;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=activity-join-vo.d.ts.map