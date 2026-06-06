import { PageableObject } from './pageable-object';
import { SearchResult } from './search-result';
import { SortObject } from './sort-object';
export interface PageSearchResult {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: SearchResult[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-search-result.d.ts.map