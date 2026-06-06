import { FollowUserVO } from './follow-user-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFollowUserVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FollowUserVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-follow-user-vo.d.ts.map