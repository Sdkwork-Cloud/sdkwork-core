import { ModelLimitInfo } from './model-limit-info';
import { ModelMetadata } from './model-metadata';
import { ModelPrice } from './model-price';
import { ModelPriceVO } from './model-price-vo';
import { SceneContent } from './scene-content';
import { TagsContent } from './tags-content';
/** Model detail response */
export interface ModelInfoDetailVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
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
    /** Max input tokens */
    maxInputTokens?: number;
    /** Max output tokens */
    maxOutputTokens?: number;
    /** Supports reasoning */
    supportReasoning?: boolean;
    /** Supports multimodal */
    supportMultimodal?: boolean;
    /** Supports function call */
    supportFunctionCall?: boolean;
    /** Supports structured output */
    supportStructuredOutput?: boolean;
    /** Supports realtime */
    supportRealtime?: boolean;
    /** Supports fine-tuning */
    supportFineTuning?: boolean;
    /** Popularity score */
    popularityScore?: number;
    /** Model family */
    family?: string;
    /** Version */
    version?: string;
    /** Whether open source */
    openSource?: boolean;
    /** API endpoint */
    apiEndpoint?: string;
    /** Owner */
    ownedBy?: string;
    /** Scenes */
    scenes?: SceneContent;
    /** Tags */
    tags?: TagsContent;
    /** Limit info */
    limitInfo?: ModelLimitInfo;
    /** Model price info */
    priceInfo?: ModelPrice;
    /** Metadata */
    metadata?: ModelMetadata;
    /** Product support and parameter constraints */
    productSupportInfo?: Record<string, unknown>;
    /** Pricing rules */
    priceRules?: ModelPriceVO[];
    /** Default temperature */
    defaultTemperature?: number;
    /** Default top_p */
    defaultTopP?: number;
    /** Default frequency penalty */
    defaultFrequencyPenalty?: number;
    /** Default presence penalty */
    defaultPresencePenalty?: number;
    /** Status */
    status?: string;
    /** Usage count */
    usageCount?: number;
    /** Total tokens */
    totalTokens?: number;
    /** Average response time */
    avgResponseTime?: number;
}
//# sourceMappingURL=model-info-detail-vo.d.ts.map