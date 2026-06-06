/** Cash transfer result */
export interface CashTransferVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Transaction ID */
    transactionId?: string;
    /** Source account ID */
    fromAccountId?: string;
    /** Target account ID */
    toAccountId?: string;
    /** Transfer amount */
    amount?: number;
    /** Transaction status code */
    status?: string;
    /** Source balance after the transfer */
    fromBalanceAfter?: number;
    /** Target balance after the transfer */
    toBalanceAfter?: number;
}
//# sourceMappingURL=cash-transfer-vo.d.ts.map