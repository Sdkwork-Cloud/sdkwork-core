/** 图片响应 */
export interface ImageVO {
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
    /** 状态 */
    status?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
    /** 查看次数 */
    viewCount?: number;
    /** 点赞数 */
    likeCount?: number;
}
//# sourceMappingURL=image-vo.d.ts.map