import { LotteryDrawVO } from './lottery-draw-vo';
/** API调用结果 */
export interface PlusApiResultLotteryDrawVO {
    /** Response data */
    data: LotteryDrawVO;
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
//# sourceMappingURL=plus-api-result-lottery-draw-vo.d.ts.map