import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { InviteLinkForm, PlusApiResultInviteInfoVO, PlusApiResultInviteLinkVO, PlusApiResultInviteRewardClaimVO, PlusApiResultListSharePlatformVO, PlusApiResultPageInviteRecordVO, PlusApiResultPageShareRecordVO, PlusApiResultPageShareVisitorVO, PlusApiResultShareCreateVO, PlusApiResultShareInfoVO, PlusApiResultSharePosterVO, PlusApiResultShareRecordVO, PlusApiResultShareStatisticsVO, PlusApiResultShareVerifyVO, PlusApiResultVoid, ShareCreateForm, SharePosterForm, ShareTrackForm, ShareUpdateForm, ShareVerifyForm, ShareVisitForm } from '../types';
export declare class ShareApi {
    private client;
    constructor(client: HttpClient);
    /** 更新分享设置 */
    updateShareSettings(shareId: string | number, body: ShareUpdateForm): Promise<PlusApiResultShareRecordVO>;
    /** 取消分享 */
    cancel(shareId: string | number): Promise<PlusApiResultVoid>;
    /** 创建分享 */
    createShare(body: ShareCreateForm): Promise<PlusApiResultShareCreateVO>;
    /** 访问分享 */
    visit(shareCode: string | number, body: ShareVisitForm): Promise<PlusApiResultVoid>;
    /** 验证分享密码 */
    verifySharePassword(shareCode: string | number, body: ShareVerifyForm): Promise<PlusApiResultShareVerifyVO>;
    /** 上报分享 */
    track(body: ShareTrackForm): Promise<PlusApiResultVoid>;
    /** 生成分享海报 */
    generateSharePoster(body: SharePosterForm): Promise<PlusApiResultSharePosterVO>;
    /** 领取邀请奖励 */
    claimInviteReward(rewardId: string | number): Promise<PlusApiResultInviteRewardClaimVO>;
    /** 生成邀请链接 */
    generateInviteLink(body: InviteLinkForm): Promise<PlusApiResultInviteLinkVO>;
    /** 获取访问记录 */
    getShareVisitors(shareId: string | number, params?: QueryParams): Promise<PlusApiResultPageShareVisitorVO>;
    /** 获取分享统计 */
    getShareStatistics(shareId: string | number): Promise<PlusApiResultShareStatisticsVO>;
    /** 获取分享信息 */
    getShareInfo(shareCode: string | number, params?: QueryParams): Promise<PlusApiResultShareInfoVO>;
    /** 获取分享平台配置 */
    getSharePlatforms(): Promise<PlusApiResultListSharePlatformVO>;
    /** 获取我的分享 */
    listMyShares(params?: QueryParams): Promise<PlusApiResultPageShareRecordVO>;
    /** 获取邀请记录 */
    getInviteRecords(params?: QueryParams): Promise<PlusApiResultPageInviteRecordVO>;
    /** 获取邀请信息 */
    getInviteInfo(): Promise<PlusApiResultInviteInfoVO>;
    /** 批量取消分享 */
    batchCancelShares(): Promise<PlusApiResultVoid>;
}
export declare function createShareApi(client: HttpClient): ShareApi;
//# sourceMappingURL=share.d.ts.map