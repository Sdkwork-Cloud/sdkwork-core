import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CommentCreateForm, CommentReplyForm, PlusApiResultCommentDetailVO, PlusApiResultCommentStatisticsVO, PlusApiResultCommentVO, PlusApiResultPageCommentVO, PlusApiResultVoid } from '../types';
export declare class CommentApi {
    private client;
    constructor(client: HttpClient);
    /** 发表评论 */
    createComment(body: CommentCreateForm): Promise<PlusApiResultCommentVO>;
    /** 回复评论 */
    reply(commentId: string | number, body: CommentReplyForm): Promise<PlusApiResultCommentVO>;
    /** 置顶评论 */
    pin(commentId: string | number): Promise<PlusApiResultCommentVO>;
    /** 取消置顶 */
    unpin(commentId: string | number): Promise<PlusApiResultCommentVO>;
    /** 点赞评论 */
    like(commentId: string | number): Promise<PlusApiResultCommentVO>;
    /** 取消点赞 */
    unlike(commentId: string | number): Promise<PlusApiResultCommentVO>;
    /** 获取评论详情 */
    getCommentDetail(commentId: string | number): Promise<PlusApiResultCommentDetailVO>;
    /** 删除评论 */
    deleteComment(commentId: string | number): Promise<PlusApiResultVoid>;
    /** 获取回复列表 */
    getReplies(commentId: string | number, params?: QueryParams): Promise<PlusApiResultPageCommentVO>;
    /** 获取评论统计 */
    getCommentStatistics(params?: QueryParams): Promise<PlusApiResultCommentStatisticsVO>;
    /** 获取我的评论 */
    getMyComments(params?: QueryParams): Promise<PlusApiResultPageCommentVO>;
    /** 获取评论列表 */
    getComments(params?: QueryParams): Promise<PlusApiResultPageCommentVO>;
}
export declare function createCommentApi(client: HttpClient): CommentApi;
//# sourceMappingURL=comment.d.ts.map