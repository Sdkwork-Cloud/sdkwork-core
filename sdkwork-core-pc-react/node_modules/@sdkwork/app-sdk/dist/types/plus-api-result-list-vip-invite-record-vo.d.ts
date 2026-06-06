import { VipInviteRecordVO } from './vip-invite-record-vo';
/** API调用结果 */
export interface PlusApiResultListVipInviteRecordVO {
    /** Response data */
    data: VipInviteRecordVO[];
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
//# sourceMappingURL=plus-api-result-list-vip-invite-record-vo.d.ts.map