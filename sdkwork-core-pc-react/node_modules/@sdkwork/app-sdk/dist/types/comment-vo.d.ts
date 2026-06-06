import { AuthorInfo } from './author-info';
/** 评论响应 */
export interface CommentVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 评论ID */
    commentId?: string;
    /** 评论内容 */
    content?: string;
    /** 内容类型 */
    contentType?: string;
    /** 内容ID */
    contentId?: number;
    /** 用户ID */
    userId?: number;
    /** 评论状态 */
    status?: string;
    /** 点赞数 */
    likes?: number;
    /** 回复数 */
    replyCount?: number;
    /** 是否置顶 */
    isTop?: boolean;
    /** 父评论ID */
    parentId?: number;
    author?: AuthorInfo;
}
//# sourceMappingURL=comment-vo.d.ts.map