import { WalletAssetAccountVO } from './wallet-asset-account-vo';
/** Wallet overview */
export interface WalletOverviewVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** User ID */
    userId?: string;
    /** Snapshot time */
    snapshotAt?: string;
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
    /** Wallet asset accounts */
    accounts?: WalletAssetAccountVO[];
}
//# sourceMappingURL=wallet-overview-vo.d.ts.map