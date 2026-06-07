export interface ContentAuditForm {
    contentId: string;
    textContent?: string;
    imageUrls?: string[];
    videoUrl?: string;
    audioUrl?: string;
    contentType?: string;
    scene?: string;
    checkTypes?: string[];
    metadata?: Record<string, unknown>;
    userId?: string;
}
//# sourceMappingURL=content-audit-form.d.ts.map