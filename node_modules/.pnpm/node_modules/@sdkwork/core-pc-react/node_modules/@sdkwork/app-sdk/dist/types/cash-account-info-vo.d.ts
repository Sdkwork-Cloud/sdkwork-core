/** Cash account details */
export interface CashAccountInfoVO {
    /** Creation time */
    createdAt?: string;
    /** Last update time */
    updatedAt?: string;
    /** Account ID */
    accountId?: string;
    /** Account type code */
    accountType?: string;
    /** Account type display name */
    accountTypeName?: string;
    /** Owner ID */
    ownerId?: string;
    /** User ID */
    userId?: string;
    /** Available cash balance */
    availableBalance?: number;
    /** Frozen cash balance */
    frozenBalance?: number;
    /** Total cash balance */
    totalBalance?: number;
    /** Account status code */
    status?: string;
    /** Account status display name */
    statusName?: string;
    /** Pending cash amount */
    pendingBalance?: number;
    /** Total recharge amount */
    totalRecharged?: number;
    /** Total spending amount */
    totalSpent?: number;
    /** Total withdrawal amount */
    totalWithdrawn?: number;
}
//# sourceMappingURL=cash-account-info-vo.d.ts.map