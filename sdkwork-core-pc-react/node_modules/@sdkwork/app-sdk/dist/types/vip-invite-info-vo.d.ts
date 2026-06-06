/** VIP邀请信息响应 */
export interface VipInviteInfoVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 邀请码 */
    inviteCode?: string;
    /** 邀请链接 */
    inviteLink?: string;
    /** 总邀请人数 */
    totalInvites?: number;
    /** 成功邀请人数 */
    successfulInvites?: number;
    /** 奖励灵点数 */
    rewardPoints?: number;
    /** 邀请奖励规则 */
    rewardRule?: string;
}
//# sourceMappingURL=vip-invite-info-vo.d.ts.map