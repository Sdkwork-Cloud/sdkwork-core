export interface DriveUploadMultipartForm {
    file: string;
    /** Optional folder item id. */
    parentId?: string;
    /** Optional override filename. */
    name?: string;
    conflictPolicy?: 'rename' | 'overwrite' | 'reject';
    /** Optional logical asset type (IMAGE/VIDEO/AUDIO/DOCUMENT). */
    assetType?: string;
}
//# sourceMappingURL=drive-upload-multipart-form.d.ts.map