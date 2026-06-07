import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { VoteDetailVO } from './vote-detail-vo';
export interface PageVoteDetailVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: VoteDetailVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-vote-detail-vo.d.ts.map