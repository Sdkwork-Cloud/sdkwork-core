export interface SkillSaveForm {
    skillKey?: string;
    name?: string;
    summary?: string;
    description?: string;
    icon?: string;
    coverImage?: string;
    categoryId?: number;
    packageId?: number;
    provider?: string;
    version?: string;
    runtime?: string;
    entrypoint?: string;
    manifestUrl?: string;
    repositoryUrl?: string;
    homepageUrl?: string;
    documentationUrl?: string;
    licenseName?: string;
    sourceType?: string;
    visibility?: string;
    enabled?: boolean;
    price?: number;
    currency?: string;
    tags?: string[];
    capabilities?: string[];
    configSchema?: Record<string, unknown>;
    defaultConfig?: Record<string, unknown>;
}
//# sourceMappingURL=skill-save-form.d.ts.map