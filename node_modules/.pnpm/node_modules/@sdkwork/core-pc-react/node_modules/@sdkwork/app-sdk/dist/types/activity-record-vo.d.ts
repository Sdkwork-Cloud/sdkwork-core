/** 活动参与记录 */
export interface ActivityRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: string;
    /** 活动ID */
    activityId?: string;
    /** 活动标题 */
    activityTitle?: string;
    /** 活动类型 */
    activityType?: string;
    /** 参与时间 */
    participateTime?: string;
    /** 参与状态 */
    status?: string;
    /** 参与结果 */
    result?: string;
    /** 获得的奖励 */
    rewards?: Record<string, unknown>;
}
//# sourceMappingURL=activity-record-vo.d.ts.map