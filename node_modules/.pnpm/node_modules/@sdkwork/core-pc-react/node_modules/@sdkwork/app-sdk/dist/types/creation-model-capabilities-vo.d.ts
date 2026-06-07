import { CreationOptionVO } from './creation-option-vo';
/** Creation model capabilities. */
export interface CreationModelCapabilitiesVO {
    /** Supports reasoning. */
    supportsReasoning?: boolean;
    /** Supports multimodal. */
    supportsMultimodal?: boolean;
    /** Supports function call. */
    supportsFunctionCall?: boolean;
    /** Aspect ratio options. */
    aspectRatioOptions?: CreationOptionVO[];
    /** Resolution options. */
    resolutionOptions?: CreationOptionVO[];
    /** Duration options. */
    durationOptions?: CreationOptionVO[];
    /** Style options. */
    styleOptions?: CreationOptionVO[];
}
//# sourceMappingURL=creation-model-capabilities-vo.d.ts.map