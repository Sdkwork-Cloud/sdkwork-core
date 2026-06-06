import { BillingLineItem } from './billing-line-item';
export interface BillingQuote {
    usageType?: 'DEFAULT' | 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'EMBEDDING' | 'CHAT' | 'TEXT_TO_SPEECH' | 'SPEECH_TO_TEXT' | 'PASS_SMS' | 'PAAS_FILE' | 'OTHER';
    billingScene?: 'LLM_CHAT' | 'EMBEDDING' | 'IMAGE_GENERATION' | 'VIDEO_GENERATION' | 'SPEECH_SYNTHESIS' | 'SPEECH_RECOGNITION' | 'MUSIC_GENERATION' | 'AUDIO_EFFECT' | 'API_CALL' | 'STORAGE' | 'UNKNOWN';
    billingType?: 'DEFAULT' | 'TOKEN' | 'COUNT' | 'TIME' | 'DATA_VOLUME' | 'HYBRID';
    /** 货币代码枚举（包含国际标准货币和自定义货币类型） */
    currencyCode?: 'USD' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'CHF' | 'CNY' | 'SEK' | 'NZD' | 'BRL' | 'INR' | 'RUB' | 'ZAR' | 'SGD' | 'HKD' | 'KRW' | 'MXN' | 'TRY' | 'ILS' | 'POINT' | 'TOKEN';
    lineItems?: BillingLineItem[];
    totalPointsCharge?: number;
    totalTokenCharge?: number;
    totalCashCost?: number;
}
//# sourceMappingURL=billing-quote.d.ts.map