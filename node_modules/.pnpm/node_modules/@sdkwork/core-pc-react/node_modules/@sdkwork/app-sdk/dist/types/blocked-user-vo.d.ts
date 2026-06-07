/** 黑名单用户响应 */
export interface BlockedUserVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: string;
    /** 用户名 */
    username?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatar?: string;
    /** 拉黑时间 */
    blockTime?: string;
    /** 拉黑原因 */
    blockReason?: string;
}
//# sourceMappingURL=blocked-user-vo.d.ts.map