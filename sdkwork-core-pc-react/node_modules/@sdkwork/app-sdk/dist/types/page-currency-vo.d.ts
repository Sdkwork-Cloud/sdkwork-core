import { CurrencyVO } from './currency-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCurrencyVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CurrencyVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-currency-vo.d.ts.map