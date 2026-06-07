import { LotteryPrize } from './lottery-prize';
import { RecentWinner } from './recent-winner';
/** 抽奖详情 */
export interface LotteryDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 抽奖ID */
    id?: string;
    /** 抽奖标题 */
    title?: string;
    /** 抽奖描述 */
    description?: string;
    /** 抽奖规则 */
    rules?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 免费抽奖次数 */
    freeDrawCount?: number;
    /** 剩余免费次数 */
    remainingFreeCount?: number;
    /** 积分抽奖价格 */
    pointsCost?: number;
    /** 我的积分 */
    myPoints?: number;
    /** 奖品列表 */
    prizes?: LotteryPrize[];
    /** 最近中奖记录 */
    recentWinners?: RecentWinner[];
}
//# sourceMappingURL=lottery-detail-vo.d.ts.map