import { AssetMediaResource } from './asset-media-resource';
import { ImageMediaResource } from './image-media-resource';
/** 资产响应 */
export interface AssetVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 资产ID */
    assetId?: string;
    /** 资产名称 */
    assetName?: string;
    /** 资产类型: IMAGE-图片, VIDEO-视频, AUDIO-音频, DOCUMENT-文档 */
    assetType?: string;
    /** 文件类型: FILE-文件, DIRECTORY-目录 */
    fileType?: string;
    /** MIME类型 */
    mimeType?: string;
    /** 文件大小(字节) */
    size?: number;
    /** 描述 */
    description?: string;
    /** 标签 */
    tags?: string[];
    /** 所属文件夹ID */
    folderId?: string;
    /** 状态 */
    status?: string;
    /** 封面图片 */
    coverImage?: ImageMediaResource;
    /** 资产媒体资源列表 */
    assets?: AssetMediaResource[];
    /** 主要资源URL */
    primaryUrl?: string;
    /** 缩略图URL */
    thumbnailUrl?: string;
}
//# sourceMappingURL=asset-vo.d.ts.map