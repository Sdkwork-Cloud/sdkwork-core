import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { ChunkRequest, FileRequest, ImageRequest, PlusApiResultFileVO, PlusApiResultListFileVO, PlusApiResultListInteger, PlusApiResultPageFileVO, PlusApiResultPresignedUrlVO, PlusApiResultStorageUsageVO, PlusApiResultUploadChunkVO, PlusApiResultUploadCredentialsVO, PlusApiResultUploadInitVO, PlusApiResultUploadPolicyVO, PlusApiResultVoid, PresignedUploadRegisterForm, PresignedUrlForm, UploadInitForm } from '../types';
export declare class UploadApi {
    private client;
    constructor(client: HttpClient);
    /** 获取上传策略 */
    getUploadPolicy(params?: QueryParams): Promise<PlusApiResultUploadPolicyVO>;
    /** 获取上传凭证 */
    getUploadCredentials(params?: QueryParams): Promise<PlusApiResultUploadCredentialsVO>;
    /** 注册预签名上传文件 */
    registerPresigned(body: PresignedUploadRegisterForm): Promise<PlusApiResultFileVO>;
    /** 获取预签名URL */
    getPresignedUrl(body: PresignedUrlForm): Promise<PlusApiResultPresignedUrlVO>;
    /** 上传图片 */
    image(body?: ImageRequest, params?: QueryParams): Promise<PlusApiResultFileVO>;
    /** 上传Base64图片 */
    base64Image(params?: QueryParams): Promise<PlusApiResultFileVO>;
    /** 获取文件列表 */
    listFiles(params?: QueryParams): Promise<PlusApiResultPageFileVO>;
    /** 多文件上传 */
    files(params?: QueryParams): Promise<PlusApiResultListFileVO>;
    /** 复制文件 */
    copyFile(fileId: string | number, params?: QueryParams): Promise<PlusApiResultFileVO>;
    /** 单文件上传 */
    file(body?: FileRequest, params?: QueryParams): Promise<PlusApiResultFileVO>;
    /** 上传分片 */
    chunk(body?: ChunkRequest, params?: QueryParams): Promise<PlusApiResultUploadChunkVO>;
    /** 合并分片 */
    mergeChunks(params?: QueryParams): Promise<PlusApiResultFileVO>;
    /** 初始化分片上传 */
    initChunk(body: UploadInitForm): Promise<PlusApiResultUploadInitVO>;
    /** 获取上传进度 */
    getUploadProgress(uploadId: string | number): Promise<PlusApiResultUploadChunkVO>;
    /** 获取存储使用情况 */
    getStorageUsage(): Promise<PlusApiResultStorageUsageVO>;
    /** 获取文件预签名URL */
    getFilePresignedUrl(fileId: string | number, params?: QueryParams): Promise<PlusApiResultPresignedUrlVO>;
    /** 获取文件详情 */
    getFileDetail(fileId: string | number): Promise<PlusApiResultFileVO>;
    /** 删除文件 */
    deleteFile(fileId: string | number): Promise<PlusApiResultVoid>;
    /** 查询分片状态 */
    getChunkStatus(params?: QueryParams): Promise<PlusApiResultListInteger>;
    /** 取消上传 */
    cancel(uploadId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createUploadApi(client: HttpClient): UploadApi;
//# sourceMappingURL=upload.d.ts.map