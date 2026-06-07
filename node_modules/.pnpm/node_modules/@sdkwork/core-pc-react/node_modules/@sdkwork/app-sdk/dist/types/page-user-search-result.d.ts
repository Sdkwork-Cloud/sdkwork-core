import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { UserSearchResult } from './user-search-result';
export interface PageUserSearchResult {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: UserSearchResult[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-user-search-result.d.ts.map