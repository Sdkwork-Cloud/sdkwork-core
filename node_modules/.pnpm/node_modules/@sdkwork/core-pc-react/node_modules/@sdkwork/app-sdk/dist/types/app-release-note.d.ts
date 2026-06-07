/** Structured app release note */
export interface AppReleaseNote {
    /** Release version */
    version?: string;
    /** Release channel */
    releaseChannel?: 'DEV' | 'INTERNAL' | 'ALPHA' | 'BETA' | 'RC' | 'STABLE' | 'HOTFIX' | 'LTS';
    /** Release title */
    title?: string;
    /** Short release summary */
    summary?: string;
    /** Detailed release content */
    content?: string;
    /** Highlighted changes */
    highlights?: string[];
    /** Referenced install package ids */
    packageIds?: string[];
    /** Published time */
    publishedAt?: string;
    /** Whether this is the current release */
    current?: boolean;
    /** Whether this release forces client update */
    forceUpdate?: boolean;
    /** Minimum supported client version */
    minSupportedVersion?: string;
    /** Extra release metadata */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=app-release-note.d.ts.map