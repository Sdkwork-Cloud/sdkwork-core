/** 音乐响应 */
export interface MusicVO {
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
    /** 缩略图URL */
    thumbnailUrl?: string;
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
}
//# sourceMappingURL=music-vo.d.ts.map