/** 实时在线VO */
export interface RealtimeOnlineVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 当前在线人数 */
    currentOnline?: number;
    /** 峰值在线人数 */
    peakOnline?: number;
    /** 平均在线人数 */
    averageOnline?: number;
    /** 新用户数 */
    newUsers?: number;
    /** 活跃用户数 */
    activeUsers?: number;
    /** 时间戳 */
    timestamp?: string;
}
//# sourceMappingURL=realtime-online-vo.d.ts.map