import { FavoriteItemVO } from './favorite-item-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageFavoriteItemVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: FavoriteItemVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-favorite-item-vo.d.ts.map