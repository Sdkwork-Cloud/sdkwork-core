import { GenerationHistoryVO } from './generation-history-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGenerationHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GenerationHistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-generation-history-vo.d.ts.map