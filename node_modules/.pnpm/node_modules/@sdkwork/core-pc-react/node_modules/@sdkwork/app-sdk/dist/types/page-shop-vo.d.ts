import { PageableObject } from './pageable-object';
import { ShopVO } from './shop-vo';
import { SortObject } from './sort-object';
export interface PageShopVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ShopVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-shop-vo.d.ts.map