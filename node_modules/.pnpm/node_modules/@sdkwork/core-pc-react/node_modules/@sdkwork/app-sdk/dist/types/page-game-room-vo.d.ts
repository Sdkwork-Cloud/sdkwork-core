import { GameRoomVO } from './game-room-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameRoomVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameRoomVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-room-vo.d.ts.map