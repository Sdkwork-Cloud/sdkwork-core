/** Wallet operation result */
export interface WalletOperationResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Client request number */
    requestNo?: string;
    /** Primary transaction ID */
    transactionId?: string;
    /** Operation type */
    operationType?: string;
    /** Account type involved in the operation */
    accountType?: string;
    /** Operation status code */
    status?: string;
    /** Operation status display name */
    statusName?: string;
    /** Source account ID */
    fromAccountId?: string;
    /** Target account ID */
    toAccountId?: string;
    /** Cash amount */
    amount?: number;
    /** Points amount */
    points?: number;
    /** Token amount */
    tokens?: number;
    /** Source cash balance after the operation */
    fromBalanceAfter?: number;
    /** Target cash balance after the operation */
    toBalanceAfter?: number;
    /** Source points balance after the operation */
    fromPointsAfter?: number;
    /** Target points balance after the operation */
    toPointsAfter?: number;
    /** Token balance after the operation */
    tokenAfter?: number;
    /** Frozen cash balance after the operation */
    frozenBalance?: number;
    /** Payment or settlement channel */
    channel?: string;
    /** Operation result description */
    resultDesc?: string;
    /** Operation processing time */
    processedAt?: string;
}
//# sourceMappingURL=wallet-operation-result-vo.d.ts.map