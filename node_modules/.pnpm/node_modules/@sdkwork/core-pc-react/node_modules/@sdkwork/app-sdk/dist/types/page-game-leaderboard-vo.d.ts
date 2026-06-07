import { GameLeaderboardVO } from './game-leaderboard-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameLeaderboardVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameLeaderboardVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-leaderboard-vo.d.ts.map