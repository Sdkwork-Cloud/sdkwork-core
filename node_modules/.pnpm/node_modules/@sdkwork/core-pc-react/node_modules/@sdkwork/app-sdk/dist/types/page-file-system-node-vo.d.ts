import { FileSystemNodeVO } from './file-system-node-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFileSystemNodeVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FileSystemNodeVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-file-system-node-vo.d.ts.map