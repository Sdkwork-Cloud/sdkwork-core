/** Wallet asset account */
export interface WalletAssetAccountVO {
    /** 创建时间 */
    createdAt?: string;
    /** Last update time */
    updatedAt?: string;
    /** Account ID */
    accountId?: string;
    /** Account type code */
    accountType?: string;
    /** Account type display name */
    accountTypeName?: string;
    /** Account status code */
    status?: string;
    /** Account status display name */
    statusName?: string;
    /** Available cash balance */
    availableBalance?: number;
    /** Frozen cash balance */
    frozenBalance?: number;
    /** Available points balance */
    availablePoints?: number;
    /** Frozen points balance */
    frozenPoints?: number;
    /** Available token balance */
    availableToken?: number;
    /** Frozen token balance */
    frozenToken?: number;
}
//# sourceMappingURL=wallet-asset-account-vo.d.ts.map