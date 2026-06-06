/** 签到结果 */
export interface CheckInVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否签到成功 */
    success?: boolean;
    /** 签到日期 */
    checkInDate?: string;
    /** 连续签到天数 */
    consecutiveDays?: number;
    /** 获得积分 */
    points?: number;
    /** 额外奖励 */
    extraRewards?: Record<string, unknown>;
    /** 今日是否已签到 */
    checkedInToday?: boolean;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=check-in-vo.d.ts.map