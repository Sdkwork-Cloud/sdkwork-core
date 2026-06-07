/** Points transfer result */
export interface PointsTransferVO {
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
    /** Transferred points */
    points?: number;
    /** Transaction status code */
    status?: string;
    /** Source points balance after the transfer */
    fromPointsAfter?: number;
    /** Target points balance after the transfer */
    toPointsAfter?: number;
}
//# sourceMappingURL=points-transfer-vo.d.ts.map