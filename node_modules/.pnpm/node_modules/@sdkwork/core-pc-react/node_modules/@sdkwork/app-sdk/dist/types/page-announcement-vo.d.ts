import { AnnouncementVO } from './announcement-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAnnouncementVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AnnouncementVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-announcement-vo.d.ts.map