import { PageableObject } from './pageable-object';
import { ProjectVO } from './project-vo';
import { SortObject } from './sort-object';
export interface PageProjectVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ProjectVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-project-vo.d.ts.map