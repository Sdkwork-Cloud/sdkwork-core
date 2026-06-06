import { CollectionVO } from './collection-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCollectionVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CollectionVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-collection-vo.d.ts.map