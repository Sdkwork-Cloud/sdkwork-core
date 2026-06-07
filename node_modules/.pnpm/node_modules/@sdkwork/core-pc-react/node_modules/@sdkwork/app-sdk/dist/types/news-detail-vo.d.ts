import { TagsContent } from './tags-content';
/** 新闻详情响应 */
export interface NewsDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 新闻ID */
    newsId?: string;
    /** 标题 */
    title?: string;
    /** 摘要 */
    summary?: string;
    /** URL */
    url?: string;
    /** 来源 */
    source?: string;
    /** 分类ID */
    categoryId?: number;
    /** 标签 */
    tags?: TagsContent;
    /** 发布时间 */
    publishTime?: string;
}
//# sourceMappingURL=news-detail-vo.d.ts.map