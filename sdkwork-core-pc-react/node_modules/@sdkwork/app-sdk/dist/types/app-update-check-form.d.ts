export interface AppUpdateCheckForm {
    appId?: number;
    runtime?: string;
    platform?: string;
    architecture?: string;
    currentVersion?: string;
    buildNumber?: string;
    releaseChannel?: string;
    packageName?: string;
    bundleId?: string;
    deviceId?: string;
    osVersion?: string;
    locale?: string;
    capabilities?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=app-update-check-form.d.ts.map