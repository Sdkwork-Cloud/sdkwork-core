/** 活动信息 */
export interface ActivityVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 活动ID */
    id?: string;
    /** 活动标题 */
    title?: string;
    /** 活动副标题 */
    subtitle?: string;
    /** 活动类型 */
    type?: string;
    /** 活动封面 */
    coverImage?: string;
    /** 活动状态 */
    status?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 是否已参与 */
    hasJoined?: boolean;
    /** 参与次数限制 */
    maxJoinCount?: number;
    /** 已参与次数 */
    joinedCount?: number;
    /** 活动标签 */
    tags?: string[];
}
//# sourceMappingURL=activity-vo.d.ts.map