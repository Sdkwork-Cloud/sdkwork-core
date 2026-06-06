import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultBoolean, PlusApiResultInviteRulesVO, PlusApiResultListVipBenefitVO, PlusApiResultListVipCouponVO, PlusApiResultListVipInviteRecordVO, PlusApiResultListVipLevelVO, PlusApiResultListVipPackGroupVO, PlusApiResultListVipPackVO, PlusApiResultListVipPointsHistoryVO, PlusApiResultLong, PlusApiResultVipDailyRewardStatusVO, PlusApiResultVipDailyRewardVO, PlusApiResultVipInfoVO, PlusApiResultVipInviteInfoVO, PlusApiResultVipInviteVO, PlusApiResultVipPackDetailVO, PlusApiResultVipPackGroupDetailVO, PlusApiResultVipPrivilegeUsageVO, PlusApiResultVipPurchaseVO, PlusApiResultVipStatusVO, PlusApiResultVoid, SpeedUpForm, VipInviteForm, VipPurchaseForm, VipRenewForm, VipUpgradeForm } from '../types';
export declare class VipApi {
    private client;
    constructor(client: HttpClient);
    /** 购买VIP */
    purchase(body: VipPurchaseForm): Promise<PlusApiResultVipPurchaseVO>;
    /** 升级VIP */
    upgrade(body: VipUpgradeForm): Promise<PlusApiResultVipPurchaseVO>;
    /** 续费VIP */
    renew(body: VipRenewForm): Promise<PlusApiResultVipPurchaseVO>;
    /** 使用加速特权 */
    useSpeedUpPrivilege(body: SpeedUpForm): Promise<PlusApiResultVoid>;
    /** 领取每日奖励 */
    claimDailyReward(): Promise<PlusApiResultVipDailyRewardVO>;
    /** 邀请好友 */
    inviteFriend(body: VipInviteForm): Promise<PlusApiResultVipInviteVO>;
    /** 领取优惠券 */
    claimCoupon(couponId: string | number): Promise<PlusApiResultVoid>;
    /** 获取VIP状态 */
    getVipStatus(): Promise<PlusApiResultVipStatusVO>;
    /** 获取特权使用情况 */
    getPrivilegeUsage(): Promise<PlusApiResultVipPrivilegeUsageVO>;
    /** 获取积分明细 */
    getPointsHistory(): Promise<PlusApiResultListVipPointsHistoryVO>;
    /** 获取每日奖励状态 */
    getDailyRewardStatus(): Promise<PlusApiResultVipDailyRewardStatusVO>;
    /** 获取积分余额 */
    getPointsBalance(): Promise<PlusApiResultLong>;
    /** 获取套餐分组列表 */
    listPackGroups(params?: QueryParams): Promise<PlusApiResultListVipPackGroupVO>;
    /** 获取分组详情 */
    getPackGroupDetail(groupId: string | number): Promise<PlusApiResultVipPackGroupDetailVO>;
    /** 获取分组套餐 */
    listPacksByGroup(groupId: string | number): Promise<PlusApiResultListVipPackVO>;
    /** 获取所有套餐 */
    listAllPacks(params?: QueryParams): Promise<PlusApiResultListVipPackVO>;
    /** 获取套餐详情 */
    getPackDetail(packId: string | number): Promise<PlusApiResultVipPackDetailVO>;
    /** 对比套餐 */
    comparePacks(params?: QueryParams): Promise<PlusApiResultListVipPackGroupVO>;
    /** 获取VIP等级列表 */
    listVipLevels(): Promise<PlusApiResultListVipLevelVO>;
    /** 获取邀请规则 */
    getInviteRules(): Promise<PlusApiResultInviteRulesVO>;
    /** 获取邀请记录 */
    getInviteRecords(params?: QueryParams): Promise<PlusApiResultListVipInviteRecordVO>;
    /** 获取邀请信息 */
    getInviteInfo(): Promise<PlusApiResultVipInviteInfoVO>;
    /** 获取VIP信息 */
    getVipInfo(): Promise<PlusApiResultVipInfoVO>;
    /** 获取VIP优惠券 */
    listVipCoupons(): Promise<PlusApiResultListVipCouponVO>;
    /** 获取我的优惠券 */
    listMyCoupons(params?: QueryParams): Promise<PlusApiResultListVipCouponVO>;
    /** 检查VIP状态 */
    checkVipStatus(): Promise<PlusApiResultBoolean>;
    /** 获取VIP权益 */
    listVipBenefits(params?: QueryParams): Promise<PlusApiResultListVipBenefitVO>;
}
export declare function createVipApi(client: HttpClient): VipApi;
//# sourceMappingURL=vip.d.ts.map