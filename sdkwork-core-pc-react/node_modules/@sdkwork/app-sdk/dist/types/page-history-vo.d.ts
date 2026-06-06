import { HistoryVO } from './history-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: HistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-history-vo.d.ts.map