/** 上传策略响应 */
export interface UploadPolicyVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 存储桶名称 */
    bucketName?: string;
    /** 对象Key前缀 */
    objectKeyPrefix?: string;
    /** 过期时间 */
    expirationTime?: string;
    /** 最大文件大小(字节) */
    maxFileSize?: number;
    /** 最小文件大小(字节) */
    minFileSize?: number;
    /** 允许的内容类型列表 */
    allowedContentTypes?: string[];
    /** 是否允许覆盖 */
    allowOverwrite?: boolean;
    /** 回调URL */
    callbackUrl?: string;
}
//# sourceMappingURL=upload-policy-vo.d.ts.map