import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultAnnouncementDetailVO, PlusApiResultInteger, PlusApiResultListAnnouncementVO, PlusApiResultListChangelogVO, PlusApiResultListOnboardingPageVO, PlusApiResultListPopupNotificationVO, PlusApiResultMaintenanceNoticeVO, PlusApiResultPageAnnouncementVO, PlusApiResultSystemStatusVO, PlusApiResultUpdateCheckVO, PlusApiResultVoid } from '../types';
export declare class AnnouncementApi {
    private client;
    constructor(client: HttpClient);
    /** 标记已读 */
    markAsRead(announcementId: string | number): Promise<PlusApiResultVoid>;
    /** 全部已读 */
    markAllAsRead(): Promise<PlusApiResultVoid>;
    /** 确认公告 */
    acknowledge(announcementId: string | number): Promise<PlusApiResultVoid>;
    /** 关闭弹窗 */
    dismissPopup(popupId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 完成引导 */
    completeOnboarding(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 公告列表 */
    listAnnouncements(params?: QueryParams): Promise<PlusApiResultPageAnnouncementVO>;
    /** 公告详情 */
    getAnnouncementDetail(announcementId: string | number): Promise<PlusApiResultAnnouncementDetailVO>;
    /** Check update */
    checkResolvedUpdate(params?: QueryParams): Promise<PlusApiResultUpdateCheckVO>;
    /** 检查更新 */
    checkUpdate(params?: QueryParams): Promise<PlusApiResultUpdateCheckVO>;
    /** 更新日志 */
    getChangelogs(params?: QueryParams): Promise<PlusApiResultListChangelogVO>;
    /** 未读公告 */
    getUnreadAnnouncements(): Promise<PlusApiResultListAnnouncementVO>;
    /** 未读公告数 */
    getUnreadAnnouncementCount(): Promise<PlusApiResultInteger>;
    /** 系统状态 */
    getSystemStatus(): Promise<PlusApiResultSystemStatusVO>;
    /** 维护公告 */
    getMaintenanceNotice(): Promise<PlusApiResultMaintenanceNoticeVO>;
    /** 弹窗通知 */
    getPopupNotifications(params?: QueryParams): Promise<PlusApiResultListPopupNotificationVO>;
    /** 置顶公告 */
    getPinnedAnnouncements(): Promise<PlusApiResultListAnnouncementVO>;
    /** 新用户引导 */
    getOnboardingPages(params?: QueryParams): Promise<PlusApiResultListOnboardingPageVO>;
    /** 最新公告 */
    getLatestAnnouncements(params?: QueryParams): Promise<PlusApiResultListAnnouncementVO>;
}
export declare function createAnnouncementApi(client: HttpClient): AnnouncementApi;
//# sourceMappingURL=announcement.d.ts.map