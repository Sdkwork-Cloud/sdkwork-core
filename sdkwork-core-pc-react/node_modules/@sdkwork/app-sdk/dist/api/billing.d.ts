import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { BillingPreflightForm, PlusApiResultBillingPrecheckResult, PlusApiResultBillingPreholdResult, PlusApiResultBillingQuote } from '../types';
export declare class BillingApi {
    private client;
    constructor(client: HttpClient);
    /** 预扣结算 */
    settle(requestNo: string | number, params?: QueryParams): Promise<PlusApiResultBillingPreholdResult>;
    /** 预扣释放 */
    release(requestNo: string | number, params?: QueryParams): Promise<PlusApiResultBillingPreholdResult>;
    /** 预扣冻结 */
    prehold(body: BillingPreflightForm): Promise<PlusApiResultBillingPreholdResult>;
    /** 余额预校验 */
    precheck(body: BillingPreflightForm): Promise<PlusApiResultBillingPrecheckResult>;
    /** 调用前报价 */
    estimate(body: BillingPreflightForm): Promise<PlusApiResultBillingQuote>;
}
export declare function createBillingApi(client: HttpClient): BillingApi;
//# sourceMappingURL=billing.d.ts.map