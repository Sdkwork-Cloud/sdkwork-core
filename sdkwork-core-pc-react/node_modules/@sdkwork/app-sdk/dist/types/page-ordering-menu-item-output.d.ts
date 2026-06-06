import { OrderingMenuItemOutput } from './ordering-menu-item-output';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrderingMenuItemOutput {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OrderingMenuItemOutput[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-ordering-menu-item-output.d.ts.map