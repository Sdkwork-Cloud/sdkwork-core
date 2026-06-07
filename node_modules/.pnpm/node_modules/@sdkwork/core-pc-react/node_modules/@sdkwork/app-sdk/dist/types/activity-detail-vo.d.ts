import { ActivityReward } from './activity-reward';
/** 活动详情 */
export interface ActivityDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 活动ID */
    id?: string;
    /** 活动标题 */
    title?: string;
    /** 活动描述 */
    description?: string;
    /** 活动类型 */
    type?: string;
    /** 活动封面 */
    coverImage?: string;
    /** 活动轮播图 */
    bannerImages?: string[];
    /** 活动规则 */
    rules?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 参与人数 */
    participantCount?: number;
    /** 是否已参与 */
    hasJoined?: boolean;
    /** 参与次数限制 */
    maxJoinCount?: number;
    /** 已参与次数 */
    joinedCount?: number;
    /** 剩余次数 */
    remainingCount?: number;
    /** 活动奖励 */
    rewards?: ActivityReward[];
    /** 额外配置 */
    extraConfig?: Record<string, unknown>;
}
//# sourceMappingURL=activity-detail-vo.d.ts.map