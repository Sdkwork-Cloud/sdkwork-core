import { AuthorInfo } from './author-info';
import { ImageMediaResource } from './image-media-resource';
/** 图片详情响应 */
export interface ImageDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 图片ID */
    imageId?: string;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** URL */
    url?: string;
    /** 格式 */
    format?: string;
    /** 宽度 */
    width?: number;
    /** 高度 */
    height?: number;
    /** 比例 */
    aspectRatio?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 资源信息 */
    resource?: ImageMediaResource;
    /** 作者信息 */
    author?: AuthorInfo;
    /** 状态 */
    status?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
    /** 查看次数 */
    viewCount?: number;
    /** 下载次数 */
    downloadCount?: number;
    /** 点赞数 */
    likeCount?: number;
}
//# sourceMappingURL=image-detail-vo.d.ts.map