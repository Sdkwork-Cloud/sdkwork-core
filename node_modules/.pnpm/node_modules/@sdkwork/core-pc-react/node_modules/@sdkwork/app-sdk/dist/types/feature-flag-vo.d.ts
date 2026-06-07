/** 特性开关响应 */
export interface FeatureFlagVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 特性标识 */
    featureKey?: string;
    /** 特性名称 */
    featureName?: string;
    /** 特性状态 */
    enabled?: boolean;
    /** 特性值 */
    value?: unknown;
    /** 特性描述 */
    description?: string;
}
//# sourceMappingURL=feature-flag-vo.d.ts.map