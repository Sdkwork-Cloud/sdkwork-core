import { PageableObject } from './pageable-object';
import { PointsGoodsVO } from './points-goods-vo';
import { SortObject } from './sort-object';
export interface PagePointsGoodsVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PointsGoodsVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-points-goods-vo.d.ts.map