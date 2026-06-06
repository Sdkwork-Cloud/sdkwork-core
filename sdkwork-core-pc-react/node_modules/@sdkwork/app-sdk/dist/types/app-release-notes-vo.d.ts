import { AppInstallConfig } from './app-install-config';
import { AppReleaseNote } from './app-release-note';
import { AppResolvedReleaseVO } from './app-resolved-release-vo';
import { AppRuntimeUpdateConfig } from './app-runtime-update-config';
/** App release notes payload */
export interface AppReleaseNotesVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** App ID */
    appId?: string;
    /** App name */
    appName?: string;
    /** Current app version */
    currentVersion?: string;
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
}
//# sourceMappingURL=app-release-notes-vo.d.ts.map