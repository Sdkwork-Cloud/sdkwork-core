/** Document response */
export interface DocumentVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Document id */
    documentId?: string;
    /** Document uuid */
    documentUuid?: string;
    /** Document title */
    title?: string;
    /** Folder id */
    folderId?: string;
    /** Asset type */
    assetType?: string;
    /** Mime type */
    mimeType?: string;
    /** Description */
    description?: string;
    /** Tags */
    tags?: string[];
    /** Status */
    status?: string;
    /** Whether favorited */
    favorited?: boolean;
    /** Summary */
    summary?: string;
    /** Word count */
    wordCount?: number;
    /** Character count */
    charCount?: number;
}
//# sourceMappingURL=document-vo.d.ts.map