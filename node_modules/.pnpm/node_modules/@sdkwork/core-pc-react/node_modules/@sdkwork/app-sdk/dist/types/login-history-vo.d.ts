export interface LoginHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: string;
    /** 登录时间 */
    loginTime?: string;
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
    /** 登录状态 */
    status?: string;
    /** 登录结果 */
    result?: string;
    /** 失败原因 */
    failureReason?: string;
}
//# sourceMappingURL=login-history-vo.d.ts.map