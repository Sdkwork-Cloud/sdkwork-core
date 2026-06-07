/** 模型定价具体条目（包含价格类型和对应价格数值） */
export interface ModelPriceItem {
    /** 价格类型（输入/输出/批量处理等） */
    type?: 'INPUT' | 'BATCH_INPUT' | 'CACHED_INPUT' | 'BATCH_CACHED_INPUT' | 'OUTPUT' | 'BATCH_OUTPUT' | 'COUNT' | 'DURATION';
    /** 价格数值（单位由价格计量单位决定） */
    price?: number;
}
//# sourceMappingURL=model-price-item.d.ts.map