/** 上传分块响应 */
export interface UploadChunkVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 上传ID */
    uploadId?: string;
    /** 分块索引 */
    chunkIndex?: number;
    /** 分块大小 */
    chunkSize?: number;
    /** 上传状态 */
    status?: string;
    /** 上传结果 */
    success?: boolean;
    /** 错误信息 */
    errorMsg?: string;
    /** 分块MD5 */
    chunkMd5?: string;
    /** 已上传的大小 */
    uploadedSize?: number;
    /** 剩余块数 */
    remainingChunks?: number;
    /** 完成百分比 */
    progress?: number;
}
//# sourceMappingURL=upload-chunk-vo.d.ts.map