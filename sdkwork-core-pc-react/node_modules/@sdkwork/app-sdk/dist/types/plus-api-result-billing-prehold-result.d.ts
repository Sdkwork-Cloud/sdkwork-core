import { BillingPreholdResult } from './billing-prehold-result';
/** API调用结果 */
export interface PlusApiResultBillingPreholdResult {
    /** Response data */
    data: BillingPreholdResult;
    /** Response code: 2000=success, 4xxx=business failure, 5xxx=server error */
    code: string;
    /** Business message */
    msg: string;
    /** Request identifier */
    requestId: string;
    /** Client IP address */
    ip?: string;
    /** Server hostname */
    hostname?: string;
    /** Business error name */
    errorName: string;
}
//# sourceMappingURL=plus-api-result-billing-prehold-result.d.ts.map