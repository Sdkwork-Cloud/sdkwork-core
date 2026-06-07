import { DocumentDetailVO } from './document-detail-vo';
/** API调用结果 */
export interface PlusApiResultDocumentDetailVO {
    /** Response data */
    data: DocumentDetailVO;
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
//# sourceMappingURL=plus-api-result-document-detail-vo.d.ts.map