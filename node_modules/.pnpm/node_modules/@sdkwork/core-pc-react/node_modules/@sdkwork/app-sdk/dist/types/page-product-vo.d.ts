import { PageableObject } from './pageable-object';
import { ProductVO } from './product-vo';
import { SortObject } from './sort-object';
export interface PageProductVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ProductVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-product-vo.d.ts.map