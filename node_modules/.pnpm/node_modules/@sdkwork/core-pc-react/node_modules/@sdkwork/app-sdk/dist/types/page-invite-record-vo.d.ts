import { InviteRecordVO } from './invite-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageInviteRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: InviteRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-invite-record-vo.d.ts.map