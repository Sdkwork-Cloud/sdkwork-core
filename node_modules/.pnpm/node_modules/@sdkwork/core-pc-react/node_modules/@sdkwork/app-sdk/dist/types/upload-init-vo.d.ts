/** 上传初始化响应 */
export interface UploadInitVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 上传ID */
    uploadId?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 分块大小 */
    chunkSize?: number;
    /** 总块数 */
    totalChunks?: number;
    /** 存储路径 */
    storagePath?: string;
    /** 上传URL */
    uploadUrl?: string;
    /** 上传参数 */
    uploadParams?: unknown;
    /** 已上传的分块索引列表 */
    uploadedChunks?: number[];
    /** 过期时间（秒） */
    expireTime?: number;
    /** 是否支持断点续传 */
    supportResume?: boolean;
    /** 上传类型 */
    uploadType?: string;
}
//# sourceMappingURL=upload-init-vo.d.ts.map