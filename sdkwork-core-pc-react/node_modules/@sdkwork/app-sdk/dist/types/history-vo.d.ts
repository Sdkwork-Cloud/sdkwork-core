/** Account history record */
export interface HistoryVO {
    /** Record creation time */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** History record ID */
    historyId?: string;
    /** Account ID */
    accountId?: string;
    /** Transaction type code */
    transactionType?: string;
    /** Transaction type display name */
    transactionTypeName?: string;
    /** Transaction amount in cash */
    amount?: number;
    /** Transaction points amount */
    points?: number;
    /** Transaction token amount */
    tokens?: number;
    /** Balance before the transaction */
    balanceBefore?: number;
    /** Balance after the transaction */
    balanceAfter?: number;
    /** Points before the transaction */
    pointsBefore?: number;
    /** Points after the transaction */
    pointsAfter?: number;
    /** Transaction ID */
    transactionId?: string;
    /** Related business ID */
    relatedId?: string;
    /** Related business type */
    relatedType?: string;
    /** Remarks */
    remarks?: string;
    /** Transaction status code */
    status?: string;
    /** Transaction status display name */
    statusName?: string;
    /** Counterparty account ID */
    counterpartyAccountId?: string;
    /** Counterparty user ID */
    counterpartyUserId?: string;
    /** Counterparty user name */
    counterpartyUserName?: string;
}
//# sourceMappingURL=history-vo.d.ts.map