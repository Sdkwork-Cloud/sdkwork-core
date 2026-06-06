/** Points recharge result */
export interface PointsRechargeVO {
    /** 鍒涘缓鏃堕棿 */
    createdAt?: string;
    /** 鏇存柊鏃堕棿 */
    updatedAt?: string;
    /** Client request number */
    requestNo?: string;
    /** Transaction ID */
    transactionId?: string;
    /** Account ID */
    accountId?: string;
    /** Recharged points */
    points?: number;
    /** Computed cash amount for this recharge */
    cashAmount?: number;
    /** Payment method */
    paymentMethod?: string;
    /** Transaction status code */
    status?: string;
    /** Transaction status display name */
    statusName?: string;
    /** Remaining points balance */
    remainingPoints?: number;
    /** Operation result description */
    resultDesc?: string;
    /** Operation processing time */
    processedAt?: string;
}
//# sourceMappingURL=points-recharge-vo.d.ts.map