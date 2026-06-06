/** 模型服务限制配置项（包含限制类型和具体数值） */
export interface ModelLimitItem {
    /** 限制项类型（如上下文长度、TPM等） */
    type?: 'CONTEXT_LENGTH' | 'MAX_INPUT_TOKENS' | 'MAX_OUTPUT_TOKENS' | 'MAX_THINKING_TOKENS' | 'TPM' | 'RPM';
    /** 限制值（具体数值，单位由模型配置的计量单位决定） */
    value?: number;
}
//# sourceMappingURL=model-limit-item.d.ts.map