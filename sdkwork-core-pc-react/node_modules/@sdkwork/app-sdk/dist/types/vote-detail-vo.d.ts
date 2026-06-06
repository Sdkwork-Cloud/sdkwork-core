/** 投票详情响应 */
export interface VoteDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 投票ID */
    voteId?: string;
    /** 用户ID */
    userId?: number;
    /** 内容类型 */
    contentType?: string;
    /** 内容ID */
    contentId?: number;
    /** 投票类型 */
    rating?: string;
    /** 投票来源 */
    source?: string;
    /** 客户端IP */
    clientIp?: string;
    /** 设备信息 */
    deviceInfo?: string;
}
//# sourceMappingURL=vote-detail-vo.d.ts.map