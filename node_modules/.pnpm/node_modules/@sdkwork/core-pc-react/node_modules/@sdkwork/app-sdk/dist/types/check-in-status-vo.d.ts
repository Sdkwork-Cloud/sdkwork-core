import { CheckInReward } from './check-in-reward';
/** 签到状态 */
export interface CheckInStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 今日是否已签到 */
    checkedInToday?: boolean;
    /** 连续签到天数 */
    consecutiveDays?: number;
    /** 本月累计签到天数 */
    monthlyCheckInCount?: number;
    /** 本月签到日期列表 */
    monthlyCheckInDates?: string[];
    /** 本月漏签日期列表 */
    missedDates?: string[];
    /** 今日签到奖励 */
    todayReward?: CheckInReward;
    /** 明日签到奖励预览 */
    tomorrowReward?: CheckInReward;
    /** 补签消耗积分 */
    makeUpCost?: number;
    /** 剩余补签次数 */
    remainingMakeUpCount?: number;
}
//# sourceMappingURL=check-in-status-vo.d.ts.map