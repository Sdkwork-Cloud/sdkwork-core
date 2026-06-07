import { AppVO } from './app-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAppVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AppVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
    records?: AppVO[];
    total?: number;
}
//# sourceMappingURL=page-app-vo.d.ts.map