import { PageableObject } from './pageable-object';
import { PaymentStatusVO } from './payment-status-vo';
import { SortObject } from './sort-object';
export interface PagePaymentStatusVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PaymentStatusVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-payment-status-vo.d.ts.map