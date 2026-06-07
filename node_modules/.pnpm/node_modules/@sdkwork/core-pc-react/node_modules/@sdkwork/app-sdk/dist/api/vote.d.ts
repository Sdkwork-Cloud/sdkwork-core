import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultListLong, PlusApiResultPageVoteDetailVO, PlusApiResultVoid, PlusApiResultVoteDetailVO, PlusApiResultVoteStatisticsVO, PlusApiResultVoteStatusVO, PlusApiResultVoteVO, VoteForm } from '../types';
export declare class VoteApi {
    private client;
    constructor(client: HttpClient);
    /** 投票 */
    vote(body: VoteForm): Promise<PlusApiResultVoteVO>;
    /** 取消投票 */
    cancel(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 切换投票 */
    toggle(body: VoteForm): Promise<PlusApiResultVoteVO>;
    /** 点赞 */
    like(params?: QueryParams): Promise<PlusApiResultVoteVO>;
    /** 点踩 */
    dislike(params?: QueryParams): Promise<PlusApiResultVoteVO>;
    /** 获取投票详情 */
    getVoteDetail(voteId: string | number): Promise<PlusApiResultVoteDetailVO>;
    /** 获取热门内容 */
    getTopLikedContent(params?: QueryParams): Promise<PlusApiResultListLong>;
    /** 获取投票状态 */
    getVoteStatus(params?: QueryParams): Promise<PlusApiResultVoteStatusVO>;
    /** 获取投票统计 */
    getVoteStatistics(params?: QueryParams): Promise<PlusApiResultVoteStatisticsVO>;
    /** 获取我的投票历史 */
    getMyVotes(params?: QueryParams): Promise<PlusApiResultPageVoteDetailVO>;
}
export declare function createVoteApi(client: HttpClient): VoteApi;
//# sourceMappingURL=vote.d.ts.map