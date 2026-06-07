/** Model summary response */
export interface ModelInfoVO {
    /** Created at */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Model id */
    modelId?: string;
    /** Canonical model key */
    modelKey?: string;
    /** Model alias */
    model?: string;
    /** Vendor model key */
    vendorModel?: string;
    /** Model name */
    name?: string;
    /** Model description */
    description?: string;
    /** Channel */
    channel?: string;
    /** Vendor */
    vendor?: string;
    /** Model type */
    modelType?: string;
    /** Model family */
    family?: string;
    /** Version */
    version?: string;
    /** Whether open source */
    openSource?: boolean;
    /** Pricing type */
    pricingType?: string;
    /** Lifecycle stage */
    lifecycleStage?: string;
    /** Release date */
    releaseDate?: string;
    /** Deprecated at */
    deprecatedAt?: string;
    /** Context tokens */
    contextTokens?: number;
    /** Supports reasoning */
    supportReasoning?: boolean;
    /** Supports multimodal */
    supportMultimodal?: boolean;
    /** Supports function-call */
    supportFunctionCall?: boolean;
    /** Status */
    status?: string;
    /** Usage count */
    usageCount?: number;
}
//# sourceMappingURL=model-info-vo.d.ts.map