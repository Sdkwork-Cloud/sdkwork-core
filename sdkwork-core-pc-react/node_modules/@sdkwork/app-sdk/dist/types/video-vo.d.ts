/** 视频响应 */
export interface VideoVO {
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
    /** 分类ID */
    categoryId?: number;
    /** 状态 */
    status?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
    /** 播放次数 */
    playCount?: number;
    /** 点赞数 */
    likeCount?: number;
    id?: string;
    coverUrl?: string;
}
//# sourceMappingURL=video-vo.d.ts.map