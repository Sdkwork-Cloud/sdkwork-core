import { PageCommentVO } from './page-comment-vo';
/** API调用结果 */
export interface PlusApiResultPageCommentVO {
    /** Response data */
    data: PageCommentVO;
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
//# sourceMappingURL=plus-api-result-page-comment-vo.d.ts.map