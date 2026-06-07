import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { SupportMessageVO } from './support-message-vo';
export interface PageSupportMessageVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: SupportMessageVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-support-message-vo.d.ts.map