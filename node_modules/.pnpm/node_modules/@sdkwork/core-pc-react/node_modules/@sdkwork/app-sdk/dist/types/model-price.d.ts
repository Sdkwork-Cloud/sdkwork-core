import { ModelPriceItem } from './model-price-item';
/** AI模型服务价格配置信息 */
export interface ModelPrice {
    /** 价格计量单位（用于指定价格项的计量基准） */
    unit?: 'TOKEN' | 'K_TOKEN' | 'M_TOKEN' | 'COUNT' | 'DURATION';
    /** 价格项列表（包含输入/输出/批量处理等价格类型） */
    items?: ModelPriceItem[];
    /** 货币代码（指定价格使用的货币类型，如USD、CNY等） */
    currency?: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'SEK' | 'NZD' | 'BRL' | 'INR' | 'RUB' | 'ZAR' | 'SGD' | 'HKD' | 'KRW' | 'MXN' | 'TRY' | 'ILS' | 'POINT' | 'TOKEN';
}
//# sourceMappingURL=model-price.d.ts.map