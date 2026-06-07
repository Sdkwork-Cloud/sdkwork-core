import { PromptEnhanceResponse } from './prompt-enhance-response';
/** API调用结果 */
export interface PlusApiResultPromptEnhanceResponse {
    /** Response data */
    data: PromptEnhanceResponse;
    /** Response code: 2000=success, 4xxx=business failure, 5xxx=server error */
    code: number;
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
    message: string;
    timestamp?: string;
    traceId?: string;
}
//# sourceMappingURL=plus-api-result-prompt-enhance-response.d.ts.map