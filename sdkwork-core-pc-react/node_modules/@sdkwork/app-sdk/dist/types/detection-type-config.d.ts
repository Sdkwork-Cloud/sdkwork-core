/** 检测类型配置 */
export interface DetectionTypeConfig {
    /** 检测类型 */
    type?: string;
    /** 类型名称 */
    name?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 敏感度 */
    sensitivity?: 'low' | 'medium' | 'high';
    /** 阈值 */
    threshold?: number;
}
//# sourceMappingURL=detection-type-config.d.ts.map