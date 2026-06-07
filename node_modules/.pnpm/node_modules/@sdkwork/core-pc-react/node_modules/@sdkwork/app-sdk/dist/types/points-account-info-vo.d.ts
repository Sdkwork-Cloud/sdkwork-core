/** Points account details */
export interface PointsAccountInfoVO {
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
    /** Available points balance */
    availablePoints?: number;
    /** Frozen points balance */
    frozenPoints?: number;
    /** Total points balance */
    totalPoints?: number;
    /** Token balance */
    tokenBalance?: number;
    /** Account status code */
    status?: string;
    /** Account status display name */
    statusName?: string;
    /** Pending points amount */
    pendingPoints?: number;
    /** Total points earned */
    totalEarned?: number;
    /** Total points spent */
    totalSpent?: number;
    /** Points level */
    level?: number;
    /** Points level display name */
    levelName?: string;
    /** Experience value */
    experience?: number;
}
//# sourceMappingURL=points-account-info-vo.d.ts.map