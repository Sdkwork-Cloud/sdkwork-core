import { LotteryPrizeVO } from './lottery-prize-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageLotteryPrizeVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: LotteryPrizeVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-lottery-prize-vo.d.ts.map