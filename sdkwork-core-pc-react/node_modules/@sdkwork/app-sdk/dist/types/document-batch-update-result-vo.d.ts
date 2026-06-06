/** Document batch update result */
export interface DocumentBatchUpdateResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Document id */
    documentId?: string;
    /** Document uuid */
    documentUuid?: string;
    /** Version id after batch update */
    versionId?: string;
    /** Applied operation count */
    appliedCount?: number;
    /** Skipped operation count */
    skippedCount?: number;
    /** Character count after update */
    charCount?: number;
    /** Word count after update */
    wordCount?: number;
}
//# sourceMappingURL=document-batch-update-result-vo.d.ts.map