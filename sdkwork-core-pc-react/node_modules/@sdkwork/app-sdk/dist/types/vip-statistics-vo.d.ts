import { VipPrivilegeVO } from './vip-privilege-vo';
import { VipRenewalVO } from './vip-renewal-vo';
import { VipUpgradeVO } from './vip-upgrade-vo';
/** VIP统计响应 */
export interface VipStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** VIP状态：active/expired/pending */
    status?: string;
    /** VIP等级 */
    level?: string;
    /** VIP开始时间 */
    startedAt?: string;
    /** VIP过期时间 */
    expiredAt?: string;
    /** VIP剩余天数 */
    remainingDays?: number;
    /** VIP总天数 */
    totalDays?: number;
    /** VIP特权列表 */
    privileges?: VipPrivilegeVO[];
    /** VIP续费信息 */
    renewalInfo?: VipRenewalVO;
    /** VIP升级信息 */
    upgradeInfo?: VipUpgradeVO;
}
//# sourceMappingURL=vip-statistics-vo.d.ts.map