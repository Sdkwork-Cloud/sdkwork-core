/** 公告VO */
export interface AnnouncementVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 公告ID */
    announcementId?: string;
    /** 标题 */
    title?: string;
    /** 类型 */
    type?: string;
    /** 状态 */
    status?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 过期时间 */
    expireTime?: string;
    /** 查看次数 */
    viewCount?: number;
    /** 是否置顶 */
    isTop?: boolean;
    /** 封面图片 */
    coverImage?: string;
}
//# sourceMappingURL=announcement-vo.d.ts.map