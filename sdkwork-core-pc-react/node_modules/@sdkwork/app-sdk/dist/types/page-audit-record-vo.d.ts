import { AuditRecordVO } from './audit-record-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAuditRecordVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AuditRecordVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-audit-record-vo.d.ts.map