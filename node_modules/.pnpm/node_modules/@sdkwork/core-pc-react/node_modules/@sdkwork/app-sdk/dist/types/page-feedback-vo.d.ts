import { FeedbackVO } from './feedback-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFeedbackVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FeedbackVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-feedback-vo.d.ts.map