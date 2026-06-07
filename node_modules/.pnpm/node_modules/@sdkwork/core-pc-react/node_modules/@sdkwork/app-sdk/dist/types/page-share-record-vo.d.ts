import { PageableObject } from './pageable-object';
import { ShareRecordVO } from './share-record-vo';
import { SortObject } from './sort-object';
export interface PageShareRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ShareRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-share-record-vo.d.ts.map