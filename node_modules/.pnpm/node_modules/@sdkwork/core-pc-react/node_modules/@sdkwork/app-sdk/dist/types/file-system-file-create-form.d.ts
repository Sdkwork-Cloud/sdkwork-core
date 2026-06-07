export interface FileSystemFileCreateForm {
    name: string;
    parentId?: string;
    diskId?: string;
    mimeType?: string;
    assetType?: string;
    description?: string;
    tags?: string[];
    text?: string;
    contents?: Record<string, string>;
    prompt?: string;
    thinkingContent?: string;
    encoding?: string;
}
//# sourceMappingURL=file-system-file-create-form.d.ts.map