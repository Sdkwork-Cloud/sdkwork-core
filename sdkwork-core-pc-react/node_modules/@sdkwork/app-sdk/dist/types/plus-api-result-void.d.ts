/** API调用结果 */
export interface PlusApiResultVoid {
    /** Response data */
    data: unknown;
    /** 2000 success; 4001 invalid argument; 4004 not found; 4009 business state conflict; 4010 token invalid; 5000 system error.
   */
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
//# sourceMappingURL=plus-api-result-void.d.ts.map