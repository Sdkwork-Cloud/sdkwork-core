import { PageableObject } from './pageable-object';
import { ReportVO } from './report-vo';
import { SortObject } from './sort-object';
export interface PageReportVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ReportVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-report-vo.d.ts.map