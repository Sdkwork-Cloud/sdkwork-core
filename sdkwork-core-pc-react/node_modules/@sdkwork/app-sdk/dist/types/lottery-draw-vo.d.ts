/** 抽奖结果 */
export interface LotteryDrawVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否中奖 */
    isWin?: boolean;
    /** 奖品ID */
    prizeId?: string;
    /** 奖品名称 */
    prizeName?: string;
    /** 奖品图片 */
    prizeImage?: string;
    /** 奖品类型 */
    prizeType?: string;
    /** 是否大奖 */
    isGrandPrize?: boolean;
    /** 中奖时间 */
    winTime?: string;
    /** 中奖记录ID */
    recordId?: string;
    /** 剩余免费次数 */
    remainingFreeCount?: number;
    /** 消耗积分 */
    pointsCost?: number;
    /** 提示消息 */
    message?: string;
}
//# sourceMappingURL=lottery-draw-vo.d.ts.map