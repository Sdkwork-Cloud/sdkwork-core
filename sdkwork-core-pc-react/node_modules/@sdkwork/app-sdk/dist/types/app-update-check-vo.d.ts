import { AppInstallPackage } from './app-install-package';
/** Unified app update check payload */
export interface AppUpdateCheckVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Whether update is available */
    hasUpdate?: boolean;
    /** Whether update should be applied */
    updateRequired?: boolean;
    /** Whether update is forced */
    forceUpdate?: boolean;
    /** Current version */
    currentVersion?: string;
    /** Target version */
    targetVersion?: string;
    /** Resolved release channel */
    releaseChannel?: string;
    /** Update mode */
    updateMode?: string;
    /** Delivery type */
    deliveryType?: string;
    /** Resolved update URL */
    updateUrl?: string;
    /** Release title */
    title?: string;
    /** Release summary */
    summary?: string;
    /** Release content */
    content?: string;
    /** Release highlights */
    highlights?: string[];
    /** Resolved package size in bytes */
    sizeBytes?: number;
    /** Release publish time */
    publishedAt?: string;
    /** Resolved install package */
    resolvedPackage?: AppInstallPackage;
    /** Resolved store URL */
    storeUrl?: string;
    /** Resolved store type */
    storeType?: string;
    /** Runtime-specific payload */
    frameworkPayload?: Record<string, unknown>;
}
//# sourceMappingURL=app-update-check-vo.d.ts.map