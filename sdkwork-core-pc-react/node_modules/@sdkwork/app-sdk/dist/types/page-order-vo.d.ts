import { OrderVO } from './order-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrderVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OrderVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-order-vo.d.ts.map