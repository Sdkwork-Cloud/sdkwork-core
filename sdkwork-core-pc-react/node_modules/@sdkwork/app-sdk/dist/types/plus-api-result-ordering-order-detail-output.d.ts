import { OrderingOrderDetailOutput } from './ordering-order-detail-output';
/** API调用结果 */
export interface PlusApiResultOrderingOrderDetailOutput {
    /** Response data */
    data: OrderingOrderDetailOutput;
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
//# sourceMappingURL=plus-api-result-ordering-order-detail-output.d.ts.map