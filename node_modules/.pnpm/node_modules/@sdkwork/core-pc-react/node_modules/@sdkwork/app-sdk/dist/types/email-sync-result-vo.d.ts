/** Email sync result */
export interface EmailSyncResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Requested folder */
    requestedFolder?: string;
    /** Resolved IMAP folder */
    resolvedFolder?: string;
    /** Requested max messages */
    requestedMaxMessages?: number;
    /** Actually scanned messages */
    scannedCount?: number;
    /** Inserted new messages */
    insertedCount?: number;
    /** Updated existing messages */
    updatedCount?: number;
    /** Skipped messages */
    skippedCount?: number;
}
//# sourceMappingURL=email-sync-result-vo.d.ts.map