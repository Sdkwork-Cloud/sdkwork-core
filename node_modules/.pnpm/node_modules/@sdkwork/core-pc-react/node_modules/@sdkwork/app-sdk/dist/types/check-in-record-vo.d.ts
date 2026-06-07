/** 签到记录 */
export interface CheckInRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 签到日期 */
    date?: string;
    /** 是否已签到 */
    checkedIn?: boolean;
    /** 是否补签 */
    isMakeUp?: boolean;
    /** 获得积分 */
    points?: number;
    /** 连续天数(当天) */
    consecutiveDays?: number;
    /** 额外奖励 */
    extraRewards?: Record<string, unknown>;
}
//# sourceMappingURL=check-in-record-vo.d.ts.map