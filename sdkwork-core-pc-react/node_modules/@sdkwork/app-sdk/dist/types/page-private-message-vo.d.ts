import { PageableObject } from './pageable-object';
import { PrivateMessageVO } from './private-message-vo';
import { SortObject } from './sort-object';
export interface PagePrivateMessageVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PrivateMessageVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-private-message-vo.d.ts.map