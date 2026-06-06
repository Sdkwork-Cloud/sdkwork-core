import { ActivityRecordVO } from './activity-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageActivityRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ActivityRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-activity-record-vo.d.ts.map