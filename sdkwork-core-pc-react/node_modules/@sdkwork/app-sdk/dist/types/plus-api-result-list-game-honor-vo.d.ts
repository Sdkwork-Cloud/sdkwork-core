import { GameHonorVO } from './game-honor-vo';
/** API调用结果 */
export interface PlusApiResultListGameHonorVO {
    /** Response data */
    data: GameHonorVO[];
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
//# sourceMappingURL=plus-api-result-list-game-honor-vo.d.ts.map