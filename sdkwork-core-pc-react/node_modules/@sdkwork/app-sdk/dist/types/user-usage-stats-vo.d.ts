/** 用户使用统计VO */
export interface UserUsageStatsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 统计ID */
    statsId?: string;
    /** 用户ID */
    userId?: string;
    /** 总会话数 */
    totalSessions?: number;
    /** 总时长 */
    totalDuration?: number;
    /** 活跃天数 */
    activeDays?: number;
    /** 最后活跃天数 */
    lastActiveDays?: number;
    /** 设备类型 */
    deviceType?: string;
    /** 操作系统类型 */
    osType?: string;
    /** 首次出现时间 */
    firstSeen?: string;
    /** 最后出现时间 */
    lastSeen?: string;
    /** 用户类型 */
    userType?: string;
}
//# sourceMappingURL=user-usage-stats-vo.d.ts.map