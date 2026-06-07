import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { VideoVO } from './video-vo';
export interface PageVideoVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: VideoVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
    records?: VideoVO[];
    total?: number;
}
//# sourceMappingURL=page-video-vo.d.ts.map