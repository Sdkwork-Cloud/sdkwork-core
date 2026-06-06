/** 货币兑换响应 */
export interface CurrencyConvertVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 基础货币代码 */
    baseCurrencyCode?: string;
    /** 目标货币代码 */
    targetCurrencyCode?: string;
    /** 原始金额 */
    originalAmount?: number;
    /** 汇率 */
    rate?: number;
    /** 兑换后金额 */
    convertedAmount?: number;
}
//# sourceMappingURL=currency-convert-vo.d.ts.map