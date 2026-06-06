import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CouponPointsExchangeForm, CouponRedeemForm, CouponRollbackForm, PlusApiResultCouponStatisticsVO, PlusApiResultCouponVO, PlusApiResultPageCouponVO, PlusApiResultPageUserCouponVO, PlusApiResultUserCouponVO } from '../types';
export declare class CouponApi {
    private client;
    constructor(client: HttpClient);
    /** 领取优惠券 */
    receive(couponId: string | number): Promise<PlusApiResultUserCouponVO>;
    /** 积分兑换优惠券 */
    exchangeCouponByPoints(couponId: string | number, body: CouponPointsExchangeForm): Promise<PlusApiResultUserCouponVO>;
    /** 兑换优惠券 */
    redeem(body: CouponRedeemForm): Promise<PlusApiResultUserCouponVO>;
    /** 使用优惠券 */
    use(userCouponId: string | number, params?: QueryParams): Promise<PlusApiResultUserCouponVO>;
    /** 回滚积分兑换优惠券 */
    rollbackPointsExchange(userCouponId: string | number, body?: CouponRollbackForm): Promise<PlusApiResultUserCouponVO>;
    /** 取消使用优惠券 */
    cancelUse(userCouponId: string | number): Promise<PlusApiResultUserCouponVO>;
    /** 获取可领取优惠券列表 */
    listCoupons(params?: QueryParams): Promise<PlusApiResultPageCouponVO>;
    /** 获取优惠券详情 */
    getCouponDetail(couponId: string | number): Promise<PlusApiResultCouponVO>;
    /** 获取优惠券统计 */
    getStatistics(): Promise<PlusApiResultCouponStatisticsVO>;
    /** 获取我的优惠券列表 */
    getMyCoupons(params?: QueryParams): Promise<PlusApiResultPageUserCouponVO>;
    /** 获取用户优惠券详情 */
    getUserCouponDetail(userCouponId: string | number): Promise<PlusApiResultUserCouponVO>;
    /** 获取可用优惠券列表 */
    getAvailableCoupons(params?: QueryParams): Promise<PlusApiResultPageUserCouponVO>;
}
export declare function createCouponApi(client: HttpClient): CouponApi;
//# sourceMappingURL=coupon.d.ts.map