import { CreationModelCapabilitiesVO } from './creation-model-capabilities-vo';
/** Creation model. */
export interface CreationModelVO {
    /** Model id. */
    modelId?: string;
    /** Model key. */
    modelKey?: string;
    /** Model alias. */
    model?: string;
    /** Model name. */
    name?: string;
    /** Model description. */
    description?: string;
    /** Channel. */
    channel?: string;
    /** Model type. */
    modelType?: string;
    capabilities?: CreationModelCapabilitiesVO;
}
//# sourceMappingURL=creation-model-vo.d.ts.map