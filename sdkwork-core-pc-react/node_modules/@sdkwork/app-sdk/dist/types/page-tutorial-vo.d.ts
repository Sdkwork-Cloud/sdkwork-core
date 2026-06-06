import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { TutorialVO } from './tutorial-vo';
export interface PageTutorialVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: TutorialVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-tutorial-vo.d.ts.map