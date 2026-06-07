import { AppInstallPackage } from './app-install-package';
import { AppReleaseNote } from './app-release-note';
/** Resolved app release with downloadable packages */
export interface AppResolvedReleaseVO {
    /** Structured release note */
    releaseNote?: AppReleaseNote;
    /** Resolved downloadable packages for the release */
    packages?: AppInstallPackage[];
    /** Default package for direct download */
    defaultPackage?: AppInstallPackage;
}
//# sourceMappingURL=app-resolved-release-vo.d.ts.map