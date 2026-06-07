import { GameArenaVO } from './game-arena-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameArenaVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameArenaVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-arena-vo.d.ts.map