/** 投票统计响应 */
export interface VoteStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总投票数 */
    totalVotes?: number;
    /** 点赞数 */
    likes?: number;
    /** 点踩数 */
    dislikes?: number;
    /** 中评数 */
    neutrals?: number;
    /** 点赞比例 */
    likeRatio?: string;
}
//# sourceMappingURL=vote-statistics-vo.d.ts.map