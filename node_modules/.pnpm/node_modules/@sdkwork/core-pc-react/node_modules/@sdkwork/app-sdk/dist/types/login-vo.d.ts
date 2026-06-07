import { UserInfoVO } from './user-info-vo';
/** 登录响应 */
export interface LoginVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 访问令牌(JWT格式) */
    authToken: string;
    /** 刷新令牌 */
    refreshToken?: string;
    /** 令牌类型 */
    tokenType?: string;
    /** 过期时间(秒) */
    expiresIn?: number;
    /** 用户信息 */
    userInfo?: UserInfoVO;
}
//# sourceMappingURL=login-vo.d.ts.map