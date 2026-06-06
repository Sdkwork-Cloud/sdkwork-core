import { AppConfig } from './app-config';
import { AppInstallConfig } from './app-install-config';
import { AppInstallSkill } from './app-install-skill';
import { AppPlatforms } from './app-platforms';
import { AppReleaseNote } from './app-release-note';
import { AppRuntimeUpdateConfig } from './app-runtime-update-config';
export interface AppUpdateForm {
    name?: string;
    description?: string;
    accessUrl?: string;
    version?: string;
    iconUrl?: string;
    config?: AppConfig;
    platforms?: AppPlatforms;
    installPlatforms?: AppPlatforms;
    installSkill?: AppInstallSkill;
    installConfig?: AppInstallConfig;
    runtimeUpdateConfig?: AppRuntimeUpdateConfig;
    releaseNotes?: AppReleaseNote[];
    packageName?: string;
    bundleId?: string;
    storeUrl?: string;
    downloadUrl?: string;
}
//# sourceMappingURL=app-update-form.d.ts.map