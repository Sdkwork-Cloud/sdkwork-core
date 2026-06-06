/** 合集内容项响应 */
export interface CollectionItemVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 内容项ID */
    itemId?: string;
    /** 合集ID */
    collectionId?: string;
    /** 内容类型 */
    contentType?: string;
    /** 内容ID */
    contentId?: number;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** 封面图 */
    coverImage?: string;
    /** 排序位置 */
    position?: number;
    /** 是否置顶 */
    isPinned?: boolean;
    /** 标签 */
    tags?: string;
    /** 添加时间 */
    addedAt?: string;
}
//# sourceMappingURL=collection-item-vo.d.ts.map