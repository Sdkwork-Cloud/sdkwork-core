export interface BillingLineItem {
    ruleCode?: string;
    metricType?: 'REQUEST_COUNT' | 'PROMPT_TOKENS' | 'COMPLETION_TOKENS' | 'CACHED_TOKENS' | 'DURATION_SECONDS' | 'VIDEO_SECONDS' | 'AUDIO_SECONDS' | 'IMAGE_COUNT' | 'CHARACTER_COUNT' | 'DATA_BYTES' | 'PIXEL_MEGA';
    billingType?: 'DEFAULT' | 'TOKEN' | 'COUNT' | 'TIME' | 'DATA_VOLUME' | 'HYBRID';
    quantity?: number;
    unitSize?: number;
    pointPrice?: number;
    tokenPrice?: number;
    cashPrice?: number;
    pointCharge?: number;
    tokenCharge?: number;
    cashCharge?: number;
    /** 货币代码枚举（包含国际标准货币和自定义货币类型） */
    currencyCode?: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'SEK' | 'NZD' | 'BRL' | 'INR' | 'RUB' | 'ZAR' | 'SGD' | 'HKD' | 'KRW' | 'MXN' | 'TRY' | 'ILS' | 'POINT' | 'TOKEN';
    description?: string;
}
//# sourceMappingURL=billing-line-item.d.ts.map