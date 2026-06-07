/** 单个商店发布就绪状态 */
export interface AppStorePublishReadinessVO {
    /** 商店平台 */
    platform?: 'APPLE_APP_STORE' | 'GOOGLE_PLAY';
    /** 是否就绪 */
    ready?: boolean;
    /** 缺失字段 */
    missingFields?: string[];
}
//# sourceMappingURL=app-store-publish-readiness-vo.d.ts.map