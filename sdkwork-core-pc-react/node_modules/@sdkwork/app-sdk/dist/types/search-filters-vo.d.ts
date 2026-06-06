/** 搜索筛选条件响应 */
export interface SearchFiltersVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 类型筛选 */
    typeFilters?: Record<string, string>;
    /** 日期筛选 */
    dateFilters?: Record<string, string>;
    /** 其他筛选 */
    otherFilters?: Record<string, unknown>;
}
//# sourceMappingURL=search-filters-vo.d.ts.map