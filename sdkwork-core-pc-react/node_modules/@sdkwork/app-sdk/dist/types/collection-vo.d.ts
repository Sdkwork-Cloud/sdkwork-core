/** 合集响应 */
export interface CollectionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 合集ID */
    collectionId?: string;
    /** 合集名称 */
    name?: string;
    /** 合集描述 */
    description?: string;
    /** 合集类型 */
    type?: string;
    /** 封面图 */
    coverImage?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否置顶 */
    isPinned?: boolean;
    /** 内容数量 */
    itemCount?: number;
    /** 浏览次数 */
    viewCount?: number;
    /** 收藏次数 */
    favoriteCount?: number;
    /** 父级ID */
    parentId?: number;
}
//# sourceMappingURL=collection-vo.d.ts.map