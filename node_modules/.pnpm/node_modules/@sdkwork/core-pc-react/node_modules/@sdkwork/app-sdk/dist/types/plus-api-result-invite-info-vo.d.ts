import { InviteInfoVO } from './invite-info-vo';
/** API调用结果 */
export interface PlusApiResultInviteInfoVO {
    /** Response data */
    data: InviteInfoVO;
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
//# sourceMappingURL=plus-api-result-invite-info-vo.d.ts.map