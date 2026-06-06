import { AuditAppealVO } from './audit-appeal-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAuditAppealVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AuditAppealVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-audit-appeal-vo.d.ts.map