import { BrowseHistoryVO } from './browse-history-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageBrowseHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: BrowseHistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-browse-history-vo.d.ts.map