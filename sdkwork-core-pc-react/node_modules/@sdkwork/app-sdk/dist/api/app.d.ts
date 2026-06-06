import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AppCreateForm, AppPublishPlanUpdateForm, AppPublishPreviewForm, AppReleaseNotesUpdateForm, AppUpdateCheckForm, AppUpdateForm, PlusApiResultAppDetailVO, PlusApiResultAppPublishPlanVO, PlusApiResultAppPublishReadinessVO, PlusApiResultAppReleaseNotesVO, PlusApiResultAppStatisticsVO, PlusApiResultAppUpdateCheckVO, PlusApiResultAppVO, PlusApiResultListAppStoreCategoryVO, PlusApiResultPageAppVO, PlusApiResultVoid } from '../types';
export declare class AppApi {
    private client;
    constructor(client: HttpClient);
    /** Get app detail */
    retrieve(appId: string | number): Promise<PlusApiResultAppDetailVO>;
    /** Update app */
    updateApp(appId: string | number, body: AppUpdateForm): Promise<PlusApiResultAppVO>;
    /** Delete app */
    deleteApp(appId: string | number): Promise<PlusApiResultVoid>;
    /** Get app release notes */
    getReleaseNotes(appId: string | number): Promise<PlusApiResultAppReleaseNotesVO>;
    /** Update app release notes */
    updateReleaseNotes(appId: string | number, body: AppReleaseNotesUpdateForm): Promise<PlusApiResultAppReleaseNotesVO>;
    /** Get publish plan */
    getPublishPlan(appId: string | number): Promise<PlusApiResultAppPublishPlanVO>;
    /** Update publish plan */
    updatePublishPlan(appId: string | number, body: AppPublishPlanUpdateForm): Promise<PlusApiResultAppPublishPlanVO>;
    /** Check update */
    checkAppUpdate(body: AppUpdateCheckForm): Promise<PlusApiResultAppUpdateCheckVO>;
    /** Create app */
    createApp(body: AppCreateForm): Promise<PlusApiResultAppVO>;
    /** Preview publish result */
    previewPublish(appId: string | number, body: AppPublishPreviewForm): Promise<PlusApiResultAppUpdateCheckVO>;
    /** Deactivate app */
    deactivate(appId: string | number): Promise<PlusApiResultVoid>;
    /** Activate app */
    activate(appId: string | number): Promise<PlusApiResultVoid>;
    /** Check publish readiness */
    checkPublishReadiness(appId: string | number): Promise<PlusApiResultAppPublishReadinessVO>;
    /** Get app statistics */
    getAppStatistics(): Promise<PlusApiResultAppStatisticsVO>;
    /** Search apps */
    searchApps(params?: QueryParams): Promise<PlusApiResultPageAppVO>;
    /** List project apps */
    getProjectApps(projectId: string | number, params?: QueryParams): Promise<PlusApiResultPageAppVO>;
    /** List my apps */
    getMyApps(params?: QueryParams): Promise<PlusApiResultPageAppVO>;
    /** List app store apps */
    listStoreApps(params?: QueryParams): Promise<PlusApiResultPageAppVO>;
    /** List app store categories */
    listStoreCategories(): Promise<PlusApiResultListAppStoreCategoryVO>;
    /** Get public app store detail */
    retrieveStore(appId: string | number): Promise<PlusApiResultAppDetailVO>;
}
export declare function createAppApi(client: HttpClient): AppApi;
//# sourceMappingURL=app.d.ts.map