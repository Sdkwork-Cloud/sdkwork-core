import { BlockedUserVO } from './blocked-user-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageBlockedUserVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: BlockedUserVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-blocked-user-vo.d.ts.map