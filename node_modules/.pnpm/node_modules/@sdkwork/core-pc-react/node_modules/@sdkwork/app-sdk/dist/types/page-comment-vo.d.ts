import { CommentVO } from './comment-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCommentVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CommentVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-comment-vo.d.ts.map