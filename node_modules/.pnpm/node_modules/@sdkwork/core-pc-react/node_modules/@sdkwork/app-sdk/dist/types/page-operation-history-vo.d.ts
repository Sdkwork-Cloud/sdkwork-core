import { OperationHistoryVO } from './operation-history-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageOperationHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: OperationHistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-operation-history-vo.d.ts.map