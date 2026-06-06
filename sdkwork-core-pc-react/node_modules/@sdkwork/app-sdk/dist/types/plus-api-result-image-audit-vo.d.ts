import { ImageAuditVO } from './image-audit-vo';
/** API调用结果 */
export interface PlusApiResultImageAuditVO {
    /** Response data */
    data: ImageAuditVO;
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
//# sourceMappingURL=plus-api-result-image-audit-vo.d.ts.map