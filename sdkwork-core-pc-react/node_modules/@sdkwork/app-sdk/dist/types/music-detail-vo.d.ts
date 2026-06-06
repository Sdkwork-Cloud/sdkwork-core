import { AuthorInfo } from './author-info';
import { ImageMediaResourceList } from './image-media-resource-list';
import { MusicMediaResource } from './music-media-resource';
/** 音乐详情响应 */
export interface MusicDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 音乐ID */
    musicId?: string;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** 音乐URL */
    contentUrl?: string;
    /** 格式 */
    format?: string;
    /** 时长(秒) */
    duration?: number;
    /** 艺术家 */
    artist?: string;
    /** 流派 */
    genre?: string;
    /** 比特率 */
    bitrate?: number;
    /** 文件大小 */
    fileSize?: number;
    /** 缩略图URL */
    thumbnailUrl?: string;
    /** 封面图片列表 */
    coverImages?: ImageMediaResourceList;
    /** 资源信息 */
    resource?: MusicMediaResource;
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
//# sourceMappingURL=music-detail-vo.d.ts.map