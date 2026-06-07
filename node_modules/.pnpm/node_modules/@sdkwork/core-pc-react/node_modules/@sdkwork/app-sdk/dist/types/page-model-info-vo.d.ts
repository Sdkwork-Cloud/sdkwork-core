import { ModelInfoVO } from './model-info-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageModelInfoVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ModelInfoVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-model-info-vo.d.ts.map