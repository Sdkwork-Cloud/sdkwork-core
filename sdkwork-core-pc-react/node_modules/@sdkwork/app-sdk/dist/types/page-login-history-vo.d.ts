import { LoginHistoryVO } from './login-history-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageLoginHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: LoginHistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-login-history-vo.d.ts.map