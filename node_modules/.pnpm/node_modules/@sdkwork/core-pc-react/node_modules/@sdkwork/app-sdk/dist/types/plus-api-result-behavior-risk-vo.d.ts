import { BehaviorRiskVO } from './behavior-risk-vo';
/** API调用结果 */
export interface PlusApiResultBehaviorRiskVO {
    /** Response data */
    data: BehaviorRiskVO;
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
//# sourceMappingURL=plus-api-result-behavior-risk-vo.d.ts.map