/** 租户统计响应 */
export interface TenantStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总租户数 */
    totalTenants?: number;
    /** 活跃租户数 */
    activeTenants?: number;
    /** 冻结租户数 */
    frozenTenants?: number;
    /** 已注销租户数 */
    closedTenants?: number;
}
//# sourceMappingURL=tenant-statistics-vo.d.ts.map