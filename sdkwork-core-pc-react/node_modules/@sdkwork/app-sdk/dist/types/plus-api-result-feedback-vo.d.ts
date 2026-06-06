import { FeedbackVO } from './feedback-vo';
/** API调用结果 */
export interface PlusApiResultFeedbackVO {
    /** Response data */
    data: FeedbackVO;
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
//# sourceMappingURL=plus-api-result-feedback-vo.d.ts.map