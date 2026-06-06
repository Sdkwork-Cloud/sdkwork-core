import { CheckInStatusVO } from './check-in-status-vo';
/** API调用结果 */
export interface PlusApiResultCheckInStatusVO {
    /** Response data */
    data: CheckInStatusVO;
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
//# sourceMappingURL=plus-api-result-check-in-status-vo.d.ts.map