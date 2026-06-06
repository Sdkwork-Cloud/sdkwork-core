/** Cash withdrawal result */
export interface CashWithdrawVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Transaction ID */
    transactionId?: string;
    /** Account ID */
    accountId?: string;
    /** Withdrawal amount */
    amount?: number;
    /** Balance after withdrawal */
    balanceAfter?: number;
    /** Frozen balance after withdrawal */
    frozenBalance?: number;
    /** Transaction status code */
    status?: string;
    /** Estimated arrival time */
    estimatedArrivalTime?: string;
    /** Withdrawal method */
    withdrawMethod?: string;
}
//# sourceMappingURL=cash-withdraw-vo.d.ts.map