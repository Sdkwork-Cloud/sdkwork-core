import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { TenantVO } from './tenant-vo';
export interface PageTenantVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: TenantVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-tenant-vo.d.ts.map