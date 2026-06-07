/** 会话信息响应 */
export interface SessionInfoVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 会话ID */
    sessionId?: string;
    /** 登录时间 */
    loginTime?: string;
    /** 最后活动时间 */
    lastActivityTime?: string;
    /** 登录IP */
    ipAddress?: string;
    /** 登录地点 */
    location?: string;
    /** 登录设备 */
    device?: string;
    /** 浏览器 */
    browser?: string;
    /** 操作系统 */
    os?: string;
    /** 登录方式 */
    loginMethod?: string;
    /** 会话状态 */
    status?: string;
    /** 剩余有效期(分钟) */
    remainingMinutes?: number;
}
//# sourceMappingURL=session-info-vo.d.ts.map