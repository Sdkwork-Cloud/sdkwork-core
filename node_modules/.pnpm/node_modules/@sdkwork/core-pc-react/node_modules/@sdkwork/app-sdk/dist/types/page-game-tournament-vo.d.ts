import { GameTournamentVO } from './game-tournament-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameTournamentVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameTournamentVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-tournament-vo.d.ts.map