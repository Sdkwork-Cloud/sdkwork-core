import { WalletOperationResultVO } from './wallet-operation-result-vo';
/** API调用结果 */
export interface PlusApiResultWalletOperationResultVO {
    /** Response data */
    data: WalletOperationResultVO;
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
//# sourceMappingURL=plus-api-result-wallet-operation-result-vo.d.ts.map