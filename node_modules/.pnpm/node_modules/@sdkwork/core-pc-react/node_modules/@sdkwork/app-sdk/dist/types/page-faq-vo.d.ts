import { FaqVO } from './faq-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFaqVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FaqVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-faq-vo.d.ts.map