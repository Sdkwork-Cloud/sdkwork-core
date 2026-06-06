/** Account balance summary */
export interface AccountSummaryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Available cash balance */
    cashAvailable?: number;
    /** Frozen cash balance */
    cashFrozen?: number;
    /** Available points balance */
    pointsAvailable?: number;
    /** Frozen points balance */
    pointsFrozen?: number;
    /** Available token balance */
    tokenAvailable?: number;
    /** Frozen token balance */
    tokenFrozen?: number;
    /** Whether a payment password is configured */
    hasPayPassword?: boolean;
}
//# sourceMappingURL=account-summary-vo.d.ts.map