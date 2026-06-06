import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageMapStringObject {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: Record<string, unknown>[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-map-string-object.d.ts.map