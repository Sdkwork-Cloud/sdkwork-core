/** 广告配置VO */
export interface AdvertConfigVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 配置ID */
    configId?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 每小时最大广告数 */
    maxAdsPerHour?: number;
    /** 最小间隔时间 */
    minInterval?: number;
    /** 广告网络 */
    adNetwork?: string;
    /** API密钥 */
    apiKey?: string;
    /** 状态 */
    status?: string;
}
//# sourceMappingURL=advert-config-vo.d.ts.map