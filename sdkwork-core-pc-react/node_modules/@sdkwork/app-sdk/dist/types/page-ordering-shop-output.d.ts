import { OrderingShopOutput } from './ordering-shop-output';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrderingShopOutput {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OrderingShopOutput[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-ordering-shop-output.d.ts.map