import { CustomerServiceInfo } from './customer-service-info';
import { VipBenefitVO } from './vip-benefit-vo';
import { VipCouponVO } from './vip-coupon-vo';
/** VIP信息响应 */
export interface VipInfoVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** VIP等级 */
    vipLevel?: number;
    /** VIP等级名称 */
    vipLevelName?: string;
    /** VIP状态 */
    vipStatus?: string;
    /** 生效时间 */
    effectiveTime?: string;
    /** 过期时间 */
    expireTime?: string;
    /** 剩余天数 */
    remainingDays?: number;
    /** 总天数 */
    totalDays?: number;
    /** 累计消费 */
    totalSpent?: number;
    /** 会员积分(灵点) */
    vipPoints?: number;
    /** 成长值 */
    growthValue?: number;
    /** 升级所需成长值 */
    upgradeGrowthValue?: number;
    /** 专属客服 */
    customerService?: CustomerServiceInfo;
    /** 专属权益 */
    benefits?: VipBenefitVO[];
    /** 专属优惠券 */
    coupons?: VipCouponVO[];
}
//# sourceMappingURL=vip-info-vo.d.ts.map