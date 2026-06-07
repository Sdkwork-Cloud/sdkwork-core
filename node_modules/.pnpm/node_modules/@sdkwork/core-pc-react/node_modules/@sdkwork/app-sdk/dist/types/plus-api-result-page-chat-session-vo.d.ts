import { PageChatSessionVO } from './page-chat-session-vo';
/** API调用结果 */
export interface PlusApiResultPageChatSessionVO {
    /** Response data */
    data: PageChatSessionVO;
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
//# sourceMappingURL=plus-api-result-page-chat-session-vo.d.ts.map