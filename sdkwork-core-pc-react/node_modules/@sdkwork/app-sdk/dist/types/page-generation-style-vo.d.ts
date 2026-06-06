import { GenerationStyleVO } from './generation-style-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGenerationStyleVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GenerationStyleVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-generation-style-vo.d.ts.map