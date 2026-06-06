import { GameGrowthRecordVO } from './game-growth-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameGrowthRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameGrowthRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-growth-record-vo.d.ts.map