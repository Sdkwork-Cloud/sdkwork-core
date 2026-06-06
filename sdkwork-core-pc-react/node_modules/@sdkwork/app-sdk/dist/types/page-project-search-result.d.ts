import { PageableObject } from './pageable-object';
import { ProjectSearchResult } from './project-search-result';
import { SortObject } from './sort-object';
export interface PageProjectSearchResult {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ProjectSearchResult[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-project-search-result.d.ts.map