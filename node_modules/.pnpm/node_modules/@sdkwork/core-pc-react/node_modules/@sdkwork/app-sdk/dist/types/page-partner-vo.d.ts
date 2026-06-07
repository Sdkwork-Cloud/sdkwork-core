import { PageableObject } from './pageable-object';
import { PartnerVO } from './partner-vo';
import { SortObject } from './sort-object';
export interface PagePartnerVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PartnerVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-partner-vo.d.ts.map