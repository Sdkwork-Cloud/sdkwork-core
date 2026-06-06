import { PageableObject } from './pageable-object';
import { SkuVO } from './sku-vo';
import { SortObject } from './sort-object';
export interface PageSkuVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: SkuVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-sku-vo.d.ts.map