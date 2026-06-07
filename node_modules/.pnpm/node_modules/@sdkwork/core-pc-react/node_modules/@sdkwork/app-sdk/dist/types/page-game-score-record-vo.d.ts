import { GameScoreRecordVO } from './game-score-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameScoreRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameScoreRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-score-record-vo.d.ts.map