/** Model pricing rule */
export interface ModelPriceVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Model alias */
    model?: string;
    /** Model id */
    modelId?: number;
    /** Canonical model key */
    modelKey?: string;
    /** Channel */
    channel?: string;
    /** Product code */
    productCode?: string;
    /** Feature code */
    featureCode?: string;
    /** Billing type */
    billingType?: string;
    /** Price item type */
    priceItemType?: string;
    /** Tier name */
    tierName?: string;
    /** Rule priority */
    rulePriority?: number;
    /** Unit */
    unit?: string;
    /** Unit size */
    unitSize?: number;
    /** Currency */
    currency?: string;
    /** Base price */
    price?: number;
    /** Input price */
    inputPrice?: number;
    /** Output price */
    outputPrice?: number;
    /** Batch input price */
    batchInputPrice?: number;
    /** Batch output price */
    batchOutputPrice?: number;
    /** Cached input price */
    cachedInputPrice?: number;
    /** Batch cached input price */
    batchCachedInputPrice?: number;
    /** Min usage */
    minUsage?: number;
    /** Max usage */
    maxUsage?: number;
    /** Effective from */
    effectiveFrom?: string;
    /** Effective to */
    effectiveTo?: string;
    /** Is default rule */
    defaultRule?: boolean;
    /** Rule status */
    status?: string;
    /** Rule metadata */
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=model-price-vo.d.ts.map