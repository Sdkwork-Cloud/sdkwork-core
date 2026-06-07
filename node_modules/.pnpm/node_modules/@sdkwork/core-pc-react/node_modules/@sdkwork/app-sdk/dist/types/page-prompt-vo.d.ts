import { PageableObject } from './pageable-object';
import { PromptVO } from './prompt-vo';
import { SortObject } from './sort-object';
export interface PagePromptVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: PromptVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-prompt-vo.d.ts.map