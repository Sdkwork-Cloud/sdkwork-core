/** 文件信息响应 */
export interface FileVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 文件ID */
    fileId?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件大小(字节) */
    fileSize?: number;
    /** 文件MIME类型 */
    fileType?: string;
    /** 文件扩展名 */
    extension?: string;
    /** 对象存储Key */
    objectKey?: string;
    /** 文件路径 */
    path?: string;
    /** 磁盘ID */
    diskId?: string;
    /** 文件状态 */
    status?: string;
    /** 上传状态 */
    uploadStatus?: string;
    /** 内容类型 */
    contentType?: string;
    /** 文件分类 */
    fileCategory?: string;
    /** 资产类型 */
    assetType?: string;
    /** 访问URL */
    accessUrl?: string;
    /** 上传时间 */
    uploadTime?: string;
    url?: string;
}
//# sourceMappingURL=file-vo.d.ts.map