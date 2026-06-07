/** 补签结果 */
export interface CheckInMakeUpVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否补签成功 */
    success?: boolean;
    /** 补签日期 */
    date?: string;
    /** 消耗积分 */
    costPoints?: number;
    /** 剩余积分 */
    remainingPoints?: number;
    /** 当前连续签到天数 */
    consecutiveDays?: number;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=check-in-make-up-vo.d.ts.map