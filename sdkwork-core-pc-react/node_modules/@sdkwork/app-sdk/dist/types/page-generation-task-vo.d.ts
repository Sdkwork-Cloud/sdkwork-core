import { GenerationTaskVO } from './generation-task-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGenerationTaskVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GenerationTaskVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-generation-task-vo.d.ts.map