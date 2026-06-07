import { GameGrowthLevelVO } from './game-growth-level-vo';
/** API调用结果 */
export interface PlusApiResultListGameGrowthLevelVO {
    /** Response data */
    data: GameGrowthLevelVO[];
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
//# sourceMappingURL=plus-api-result-list-game-growth-level-vo.d.ts.map