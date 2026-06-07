import { GameRecordVO } from './game-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-record-vo.d.ts.map