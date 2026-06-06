/** VIP积分历史响应 */
export interface VipPointsHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: number;
    /** 变动类型 */
    changeType?: 'DEFAULT' | 'RECHARGE' | 'CONSUME' | 'REWARD' | 'ADJUST' | 'EXPIRE';
    /** 变动数量 */
    changeAmount?: number;
    /** 变动前余额 */
    beforeBalance?: number;
    /** 变动后余额 */
    afterBalance?: number;
    /** 来源类型 */
    sourceType?: 'DEFAULT' | 'PURCHASE' | 'DAILY_REWARD' | 'COUPON_POINTS_EXCHANGE' | 'COUPON_POINTS_ROLLBACK' | 'SYSTEM' | 'OTHER';
    /** 备注 */
    remark?: string;
}
//# sourceMappingURL=vip-points-history-vo.d.ts.map