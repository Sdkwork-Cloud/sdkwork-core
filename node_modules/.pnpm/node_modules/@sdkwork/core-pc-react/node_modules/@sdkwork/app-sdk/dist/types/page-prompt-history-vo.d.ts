import { PageableObject } from './pageable-object';
import { PromptHistoryVO } from './prompt-history-vo';
import { SortObject } from './sort-object';
export interface PagePromptHistoryVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PromptHistoryVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-prompt-history-vo.d.ts.map