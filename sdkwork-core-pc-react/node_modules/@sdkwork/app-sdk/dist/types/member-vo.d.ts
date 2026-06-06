/** 成员响应 */
export interface MemberVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 成员ID */
    memberId?: string;
    /** 用户ID */
    userId?: string;
    /** 用户名 */
    username?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像 */
    avatar?: string;
    /** 邮箱 */
    email?: string;
    /** 角色ID */
    roleId?: string;
    /** 角色名称 */
    roleName?: string;
    /** 权限列表 */
    permissions?: string[];
    /** 加入时间 */
    joinTime?: string;
    /** 最后活跃时间 */
    lastActiveTime?: string;
    /** 成员状态 */
    status?: string;
    /** 是否为创建者 */
    isCreator?: boolean;
    /** 是否为管理员 */
    isAdmin?: boolean;
}
//# sourceMappingURL=member-vo.d.ts.map