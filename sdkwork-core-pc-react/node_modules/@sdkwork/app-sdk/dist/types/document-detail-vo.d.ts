/** Document detail response */
export interface DocumentDetailVO {
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
    /** Path */
    path?: string;
    /** Object key */
    objectKey?: string;
    /** Version id */
    versionId?: string;
    /** File version in content table */
    contentVersion?: string;
    /** File extension */
    extension?: string;
}
//# sourceMappingURL=document-detail-vo.d.ts.map