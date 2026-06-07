import { PointsRechargeVO } from './points-recharge-vo';
/** API璋冪敤缁撴灉 */
export interface PlusApiResultPointsRechargeVO {
    /** Response data */
    data: PointsRechargeVO;
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
//# sourceMappingURL=plus-api-result-points-recharge-vo.d.ts.map