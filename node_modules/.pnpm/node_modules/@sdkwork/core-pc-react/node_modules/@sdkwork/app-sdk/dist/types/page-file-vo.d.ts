import { FileVO } from './file-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFileVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FileVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-file-vo.d.ts.map