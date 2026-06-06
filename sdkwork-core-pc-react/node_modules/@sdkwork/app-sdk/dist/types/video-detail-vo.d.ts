import { AuthorInfo } from './author-info';
import { ImageMediaResourceList } from './image-media-resource-list';
import { VideoMediaResource } from './video-media-resource';
/** 视频详情响应 */
export interface VideoDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 视频ID */
    videoId?: string;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** 视频URL */
    contentUrl?: string;
    /** 格式 */
    format?: string;
    /** 时长(秒) */
    duration?: number;
    /** 缩略图URL */
    thumbnailUrl?: string;
    /** 宽度 */
    width?: number;
    /** 高度 */
    height?: number;
    /** 比例 */
    aspectRatio?: string;
    /** 分辨率 */
    resolution?: string;
    /** 文件大小 */
    fileSize?: number;
    /** 分类ID */
    categoryId?: number;
    /** 封面图片列表 */
    coverImages?: ImageMediaResourceList;
    /** 视频资源 */
    resource?: VideoMediaResource;
    /** 作者信息 */
    author?: AuthorInfo;
    /** 状态 */
    status?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
    /** 播放次数 */
    playCount?: number;
    /** 下载次数 */
    downloadCount?: number;
    /** 点赞数 */
    likeCount?: number;
}
//# sourceMappingURL=video-detail-vo.d.ts.map