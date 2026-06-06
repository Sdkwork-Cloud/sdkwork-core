import { AppConfig } from './app-config';
import { AppInstallConfig } from './app-install-config';
import { AppInstallSkill } from './app-install-skill';
import { AppPlatforms } from './app-platforms';
import { AppReleaseNote } from './app-release-note';
import { AppResolvedReleaseVO } from './app-resolved-release-vo';
import { AppRuntimeUpdateConfig } from './app-runtime-update-config';
import { ImageMediaResource } from './image-media-resource';
/** Detailed app payload */
export interface AppDetailVO {
    /** Created time */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** App ID */
    appId?: string;
    /** App name */
    name?: string;
    /** App description */
    description?: string;
    /** App icon */
    icon?: ImageMediaResource;
    /** App icon URL */
    iconUrl?: string;
    /** Application access URL */
    accessUrl?: string;
    /** App version */
    version?: string;
    /** App type */
    appType?: string;
    /** App status */
    status?: string;
    /** Project ID */
    projectId?: number;
    /** Supported runtime platforms */
    platforms?: AppPlatforms;
    /** Supported install platforms */
    installPlatforms?: AppPlatforms;
    /** Install skill binding */
    installSkill?: AppInstallSkill;
    /** Install package catalog */
    installConfig?: AppInstallConfig;
    /** Runtime-specific update metadata */
    runtimeUpdateConfig?: AppRuntimeUpdateConfig;
    /** Structured release notes */
    releaseNotes?: AppReleaseNote[];
    /** Current resolved release for direct download */
    currentRelease?: AppResolvedReleaseVO;
    /** Resolved releases with packages for frontend download pages */
    releases?: AppResolvedReleaseVO[];
    /** App configuration */
    config?: AppConfig;
    /** Android package name */
    packageName?: string;
    /** iOS bundle id */
    bundleId?: string;
    /** Store listing URL */
    storeUrl?: string;
    /** Direct download URL */
    downloadUrl?: string;
    /** Developer display name. */
    developer?: string;
    /** Store category. */
    category?: string;
}
//# sourceMappingURL=app-detail-vo.d.ts.map