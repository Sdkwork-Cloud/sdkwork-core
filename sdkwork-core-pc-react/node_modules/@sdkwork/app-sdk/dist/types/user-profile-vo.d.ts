/** 用户资料响应 */
export interface UserProfileVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatar?: string;
    /** 性别：male/female/other */
    gender?: string;
    /** 生日（时间戳） */
    birthday?: number;
    /** 地区 */
    region?: string;
    /** 个人简介 */
    bio?: string;
    /** 职业 */
    occupation?: string;
    /** 兴趣爱好 */
    interests?: string;
    /** 手机号 */
    phone?: string;
    /** 邮箱 */
    email?: string;
}
//# sourceMappingURL=user-profile-vo.d.ts.map