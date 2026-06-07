import { ActivityVO } from './activity-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageActivityVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ActivityVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-activity-vo.d.ts.map