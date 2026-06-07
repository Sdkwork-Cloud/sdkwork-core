import { AppUpdateCheckVO } from './app-update-check-vo';
/** API调用结果 */
export interface PlusApiResultAppUpdateCheckVO {
    /** Response data */
    data: AppUpdateCheckVO;
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
//# sourceMappingURL=plus-api-result-app-update-check-vo.d.ts.map