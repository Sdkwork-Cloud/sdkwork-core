export interface PresignedUploadRegisterForm {
    objectKey: string;
    fileName?: string;
    size: number;
    contentType?: string;
    type?: string;
    folderId?: number;
    path?: string;
    bucket?: string;
    provider?: 'VOLCENGINE' | 'QCLOUD' | 'ALIYUN' | 'AWS' | 'OTHER';
}
//# sourceMappingURL=presigned-upload-register-form.d.ts.map