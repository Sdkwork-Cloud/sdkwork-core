import { MemberVO } from './member-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageMemberVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: MemberVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-member-vo.d.ts.map