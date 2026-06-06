/** UI配置响应 */
export interface UiConfigVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 配置标识 */
    configKey?: string;
    /** 配置名称 */
    configName?: string;
    /** UI配置 */
    uiConfig?: Record<string, unknown>;
    /** 配置版本 */
    version?: string;
}
//# sourceMappingURL=ui-config-vo.d.ts.map