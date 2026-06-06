import { AssetMediaResource } from './asset-media-resource';
/** 下载链接响应 */
export interface DownloadUrlVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 下载资源 */
    resource?: AssetMediaResource;
    /** 链接有效期(秒) */
    expiresIn?: number;
}
//# sourceMappingURL=download-url-vo.d.ts.map