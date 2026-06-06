import { ModelLimitItem } from './model-limit-item';
/** AI模型服务令牌使用限制配置信息 */
export interface ModelLimitInfo {
    /** 令牌计量单位（用于指定后续数值的计量单位基准） */
    unit?: 'TOKEN' | 'K_TOKEN' | 'M_TOKEN';
    /** 模型限制项列表（包含输入/输出/TPM/RPM等具体限制配置） */
    items?: ModelLimitItem[];
}
//# sourceMappingURL=model-limit-info.d.ts.map