import { HistoryVO } from './history-vo';
/** Wallet operation status */
export interface WalletOperationStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Request number or transaction ID */
    requestNo?: string;
    /** Whether matching records were found */
    found?: boolean;
    /** Whether the aggregated operation is completed */
    completed?: boolean;
    /** Aggregated status code */
    status?: string;
    /** Aggregated status display name */
    statusName?: string;
    /** Primary transaction ID */
    transactionId?: string;
    /** Operation type */
    operationType?: string;
    /** Account type */
    accountType?: string;
    /** Processing time */
    processedAt?: string;
    /** Related transaction IDs */
    relatedTransactionIds?: string[];
    /** Related history details */
    details?: HistoryVO[];
    /** Result description */
    resultDesc?: string;
}
//# sourceMappingURL=wallet-operation-status-vo.d.ts.map