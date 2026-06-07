/** VIP邀请记录响应 */
export interface VipInviteRecordVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: number;
    /** 被邀请人ID */
    inviteeId?: number;
    /** 被邀请人昵称 */
    inviteeNickname?: string;
    /** 被邀请人头像 */
    inviteeAvatar?: string;
    /** 邀请状态 */
    status?: string;
    /** 奖励灵点数 */
    rewardPoints?: number;
    /** 邀请时间 */
    invitedAt?: string;
    /** 完成时间 */
    completedAt?: string;
}
//# sourceMappingURL=vip-invite-record-vo.d.ts.map