/** Runtime-specific app update payload definition */
export interface AppRuntimeUpdateConfig {
    /** Tauri update manifest URL */
    tauriManifestUrl?: string;
    /** Electron auto-updater feed URL */
    electronFeedUrl?: string;
    /** Flutter patch metadata URL */
    flutterPatchUrl?: string;
    /** Capacitor bundle update URL */
    capacitorBundleUrl?: string;
    /** iOS enterprise manifest URL */
    iosManifestUrl?: string;
    /** Android native update metadata URL */
    androidUpdateUrl?: string;
    /** HarmonyOS native update metadata URL */
    harmonyUpdateUrl?: string;
    /** Additional shared framework payload */
    extraPayload?: Record<string, unknown>;
}
//# sourceMappingURL=app-runtime-update-config.d.ts.map