import { NotificationVO } from './notification-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageNotificationVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: NotificationVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
    records?: NotificationVO[];
    total?: number;
}
//# sourceMappingURL=page-notification-vo.d.ts.map