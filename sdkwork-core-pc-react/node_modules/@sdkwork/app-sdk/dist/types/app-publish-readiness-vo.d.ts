import { AppStorePublishReadinessVO } from './app-store-publish-readiness-vo';
/** 应用发布就绪状态 */
export interface AppPublishReadinessVO {
    /** 是否全部就绪 */
    ready?: boolean;
    /** 全局缺失字段 */
    missingFields?: string[];
    /** 分商店发布就绪状态 */
    stores?: AppStorePublishReadinessVO[];
}
//# sourceMappingURL=app-publish-readiness-vo.d.ts.map