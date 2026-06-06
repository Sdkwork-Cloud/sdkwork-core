import { PageOrderingOrderSummaryOutput } from './page-ordering-order-summary-output';
/** API调用结果 */
export interface PlusApiResultPageOrderingOrderSummaryOutput {
    /** Response data */
    data: PageOrderingOrderSummaryOutput;
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
//# sourceMappingURL=plus-api-result-page-ordering-order-summary-output.d.ts.map