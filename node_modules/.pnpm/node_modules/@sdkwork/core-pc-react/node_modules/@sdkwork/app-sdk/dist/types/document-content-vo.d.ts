/** Document content response */
export interface DocumentContentVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Document id */
    documentId?: string;
    /** Document uuid */
    documentUuid?: string;
    /** Content row id */
    contentId?: string;
    /** File version */
    versionId?: string;
    /** Encoding */
    encoding?: string;
    /** Prompt content */
    prompt?: string;
    /** Thinking content */
    thinkingContent?: string;
    /** Text */
    text?: string;
    /** Multiformat content map */
    contents?: Record<string, string>;
    /** Character count */
    charCount?: number;
    /** Word count */
    wordCount?: number;
}
//# sourceMappingURL=document-content-vo.d.ts.map