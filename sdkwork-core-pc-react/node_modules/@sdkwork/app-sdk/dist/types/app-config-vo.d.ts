/** 应用配置响应 */
export interface AppConfigVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 应用版本 */
    version?: string;
    /** 构建号 */
    buildNumber?: string;
    /** API版本 */
    apiVersion?: string;
    /** 服务器时间 */
    serverTime?: number;
    /** 功能开关 */
    features?: Record<string, boolean>;
    /** 系统配置 */
    systemConfig?: Record<string, unknown>;
    /** 维护状态 */
    maintenanceMode?: boolean;
    /** 维护信息 */
    maintenanceMessage?: string;
}
//# sourceMappingURL=app-config-vo.d.ts.map