import { OrganizationVO } from './organization-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrganizationVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OrganizationVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-organization-vo.d.ts.map