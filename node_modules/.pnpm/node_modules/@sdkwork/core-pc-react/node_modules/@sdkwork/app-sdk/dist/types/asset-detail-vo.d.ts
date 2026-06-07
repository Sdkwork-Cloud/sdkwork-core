import { AssetMediaResource } from './asset-media-resource';
import { ImageMediaResource } from './image-media-resource';
/** 资产详情响应 */
export interface AssetDetailVO {
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
    /** 文件类型名称 */
    fileTypeName?: string;
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
    /** 状态名称 */
    statusName?: string;
    /** 封面图片 */
    coverImage?: ImageMediaResource;
    /** 资产媒体资源列表 */
    assets?: AssetMediaResource[];
    /** 主要资源URL */
    primaryUrl?: string;
    /** 缩略图URL */
    thumbnailUrl?: string;
    /** 存储盘ID */
    diskId?: string;
    /** 文件路径 */
    path?: string;
    /** 版本ID */
    versionId?: string;
    /** 下载次数 */
    downloadCount?: number;
    /** 是否收藏 */
    favorited?: boolean;
    /** 作者 */
    author?: string;
    /** 文件扩展名 */
    extension?: string;
}
//# sourceMappingURL=asset-detail-vo.d.ts.map