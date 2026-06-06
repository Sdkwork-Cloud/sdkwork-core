/** 投票响应 */
export interface VoteVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 投票ID */
    voteId?: string;
    /** 内容类型 */
    contentType?: string;
    /** 内容ID */
    contentId?: number;
    /** 投票类型: LIKE, DISLIKE, NEUTRAL */
    rating?: string;
}
//# sourceMappingURL=vote-vo.d.ts.map