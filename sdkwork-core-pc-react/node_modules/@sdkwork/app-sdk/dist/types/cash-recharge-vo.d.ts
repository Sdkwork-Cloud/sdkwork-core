/** Cash recharge result */
export interface CashRechargeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Transaction ID */
    transactionId?: string;
    /** Account ID */
    accountId?: string;
    /** Recharge amount */
    amount?: number;
    /** Balance after recharge */
    balanceAfter?: number;
    /** Transaction status code */
    status?: string;
    /** Payment method */
    paymentMethod?: string;
    /** Payment URL */
    payUrl?: string;
}
//# sourceMappingURL=cash-recharge-vo.d.ts.map