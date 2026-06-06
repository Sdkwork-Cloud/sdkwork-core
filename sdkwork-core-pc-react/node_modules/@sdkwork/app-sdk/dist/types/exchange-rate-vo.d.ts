/** 汇率响应 */
export interface ExchangeRateVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 基础货币代码 */
    baseCurrencyCode?: string;
    /** 基础货币名称 */
    baseCurrencyName?: string;
    /** 目标货币代码 */
    targetCurrencyCode?: string;
    /** 目标货币名称 */
    targetCurrencyName?: string;
    /** 汇率 */
    rate?: number;
    /** 生效日期 */
    effectiveDate?: string;
}
//# sourceMappingURL=exchange-rate-vo.d.ts.map