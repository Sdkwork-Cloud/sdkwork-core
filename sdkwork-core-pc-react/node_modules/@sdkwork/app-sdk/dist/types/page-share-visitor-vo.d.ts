import { PageableObject } from './pageable-object';
import { ShareVisitorVO } from './share-visitor-vo';
import { SortObject } from './sort-object';
export interface PageShareVisitorVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ShareVisitorVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-share-visitor-vo.d.ts.map