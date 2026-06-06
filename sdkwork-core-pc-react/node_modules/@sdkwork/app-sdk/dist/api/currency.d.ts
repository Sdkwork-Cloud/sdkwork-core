import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CurrencyConvertForm, CurrencyCreateForm, ExchangeRateCreateForm, PlusApiResultCurrencyConvertVO, PlusApiResultCurrencyVO, PlusApiResultExchangeRateVO, PlusApiResultListCurrencyTypeVO, PlusApiResultListCurrencyVO, PlusApiResultListExchangeRateVO, PlusApiResultPageCurrencyVO } from '../types';
export declare class CurrencyApi {
    private client;
    constructor(client: HttpClient);
    /** 创建货币 */
    createCurrency(body: CurrencyCreateForm): Promise<PlusApiResultCurrencyVO>;
    /** 禁用货币 */
    deactivate(currencyId: string | number): Promise<PlusApiResultCurrencyVO>;
    /** 启用货币 */
    activate(currencyId: string | number): Promise<PlusApiResultCurrencyVO>;
    /** 创建汇率 */
    createExchangeRate(body: ExchangeRateCreateForm): Promise<PlusApiResultExchangeRateVO>;
    /** 货币兑换计算 */
    convert(body: CurrencyConvertForm): Promise<PlusApiResultCurrencyConvertVO>;
    /** 获取货币详情 */
    getCurrency(currencyId: string | number): Promise<PlusApiResultCurrencyVO>;
    /** 获取货币类型列表 */
    getCurrencyTypes(): Promise<PlusApiResultListCurrencyTypeVO>;
    /** 获取最新汇率 */
    getLatestRate(params?: QueryParams): Promise<PlusApiResultExchangeRateVO>;
    /** 获取汇率历史 */
    getRateHistory(params?: QueryParams): Promise<PlusApiResultListExchangeRateVO>;
    /** 获取货币列表 */
    getCurrencyList(params?: QueryParams): Promise<PlusApiResultPageCurrencyVO>;
    /** 根据代码获取货币 */
    getCurrencyByCode(code: string | number): Promise<PlusApiResultCurrencyVO>;
    /** 获取启用的货币 */
    getActiveCurrencies(): Promise<PlusApiResultListCurrencyVO>;
}
export declare function createCurrencyApi(client: HttpClient): CurrencyApi;
//# sourceMappingURL=currency.d.ts.map