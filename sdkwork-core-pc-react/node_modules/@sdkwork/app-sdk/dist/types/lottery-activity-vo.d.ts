import { PrizePreview } from './prize-preview';
/** 抽奖活动 */
export interface LotteryActivityVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 抽奖ID */
    id?: string;
    /** 抽奖标题 */
    title?: string;
    /** 抽奖封面 */
    coverImage?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 免费抽奖次数 */
    freeDrawCount?: number;
    /** 积分抽奖价格 */
    pointsCost?: number;
    /** 奖品预览列表 */
    prizePreview?: PrizePreview[];
    /** 是否可参与 */
    canDraw?: boolean;
}
//# sourceMappingURL=lottery-activity-vo.d.ts.map