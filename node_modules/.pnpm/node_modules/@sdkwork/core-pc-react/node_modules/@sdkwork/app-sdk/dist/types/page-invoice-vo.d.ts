import { InvoiceVO } from './invoice-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageInvoiceVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: InvoiceVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-invoice-vo.d.ts.map