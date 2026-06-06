export interface PlusAppMarketReleasePlan {
    releaseVersion?: string;
    marketId?: string;
    track?: string;
    status?: string;
    rolloutPercent?: number;
    countries?: string[];
    storeUrl?: string;
    minSupportedVersion?: string;
    forceUpdate?: boolean;
    effectiveFrom?: string;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=plus-app-market-release-plan.d.ts.map