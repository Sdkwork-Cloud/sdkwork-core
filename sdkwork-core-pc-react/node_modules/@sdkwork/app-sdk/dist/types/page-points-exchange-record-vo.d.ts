import { PageableObject } from './pageable-object';
import { PointsExchangeRecordVO } from './points-exchange-record-vo';
import { SortObject } from './sort-object';
export interface PagePointsExchangeRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PointsExchangeRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-points-exchange-record-vo.d.ts.map