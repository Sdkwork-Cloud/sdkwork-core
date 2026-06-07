import { NewsVO } from './news-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageNewsVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: NewsVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-news-vo.d.ts.map