import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AdvertClickForm, AdvertCloseForm, AdvertImpressionForm, AdvertReportForm, AdvertSettingsUpdateForm, PlusApiResultAdvertConfigVO, PlusApiResultAdvertPositionDetailVO, PlusApiResultAdvertSettingsVO, PlusApiResultInterstitialAdvertVO, PlusApiResultListAdvertPositionVO, PlusApiResultListAdvertVO, PlusApiResultListBannerAdvertVO, PlusApiResultListFeedAdvertVO, PlusApiResultPopupAdvertVO, PlusApiResultRewardedAdvertVO, PlusApiResultRewardVerifyVO, PlusApiResultSplashAdvertVO, PlusApiResultVoid, RewardVerifyForm, VideoCompleteForm, VideoProgressForm } from '../types';
export declare class AdvertApi {
    private client;
    constructor(client: HttpClient);
    /** 广告设置 */
    getAdvertSettings(): Promise<PlusApiResultAdvertSettingsVO>;
    /** 更新广告设置 */
    updateAdvertSettings(body: AdvertSettingsUpdateForm): Promise<PlusApiResultVoid>;
    /** 广告反馈 */
    report(adId: string | number, body: AdvertReportForm): Promise<PlusApiResultVoid>;
    /** 上报播放进度 */
    trackVideoProgress(adId: string | number, body: VideoProgressForm): Promise<PlusApiResultVoid>;
    /** 上报展示 */
    trackImpression(adId: string | number, body: AdvertImpressionForm): Promise<PlusApiResultVoid>;
    /** 上报播放完成 */
    trackVideoComplete(adId: string | number, body: VideoCompleteForm): Promise<PlusApiResultVoid>;
    /** 上报关闭 */
    trackClose(adId: string | number, body: AdvertCloseForm): Promise<PlusApiResultVoid>;
    /** 上报点击 */
    trackClick(adId: string | number, body: AdvertClickForm): Promise<PlusApiResultVoid>;
    /** 屏蔽广告 */
    block(adId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 验证奖励 */
    verifyReward(body: RewardVerifyForm): Promise<PlusApiResultRewardVerifyVO>;
    /** 开屏广告 */
    getSplash(): Promise<PlusApiResultSplashAdvertVO>;
    /** 激励视频广告 */
    getRewarded(params?: QueryParams): Promise<PlusApiResultRewardedAdvertVO>;
    /** 广告位列表 */
    listAdvertPositions(): Promise<PlusApiResultListAdvertPositionVO>;
    /** 广告位详情 */
    getAdvertPosition(positionId: string | number): Promise<PlusApiResultAdvertPositionDetailVO>;
    /** 获取位置广告 */
    getAdsByPosition(positionId: string | number, params?: QueryParams): Promise<PlusApiResultListAdvertVO>;
    /** 弹窗广告 */
    getPopup(): Promise<PlusApiResultPopupAdvertVO>;
    /** 插屏广告 */
    getInterstitial(params?: QueryParams): Promise<PlusApiResultInterstitialAdvertVO>;
    /** 信息流广告 */
    getFeedAdverts(params?: QueryParams): Promise<PlusApiResultListFeedAdvertVO>;
    /** 广告配置 */
    getAdvertConfig(): Promise<PlusApiResultAdvertConfigVO>;
    /** Banner广告 */
    getBannerAdverts(params?: QueryParams): Promise<PlusApiResultListBannerAdvertVO>;
}
export declare function createAdvertApi(client: HttpClient): AdvertApi;
//# sourceMappingURL=advert.d.ts.map