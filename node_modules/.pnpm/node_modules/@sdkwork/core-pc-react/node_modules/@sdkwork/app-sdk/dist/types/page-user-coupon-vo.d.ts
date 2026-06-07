import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { UserCouponVO } from './user-coupon-vo';
export interface PageUserCouponVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: UserCouponVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-user-coupon-vo.d.ts.map