import { ImageVO } from './image-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageImageVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ImageVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-image-vo.d.ts.map