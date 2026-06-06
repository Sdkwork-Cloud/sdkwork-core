import { DriveItemVO } from './drive-item-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageDriveItemVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: DriveItemVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-drive-item-vo.d.ts.map