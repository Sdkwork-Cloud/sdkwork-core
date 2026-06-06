import { CouponVO } from './coupon-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCouponVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CouponVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-coupon-vo.d.ts.map