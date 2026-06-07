import { OrderingOrderSummaryOutput } from './ordering-order-summary-output';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOrderingOrderSummaryOutput {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OrderingOrderSummaryOutput[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-ordering-order-summary-output.d.ts.map