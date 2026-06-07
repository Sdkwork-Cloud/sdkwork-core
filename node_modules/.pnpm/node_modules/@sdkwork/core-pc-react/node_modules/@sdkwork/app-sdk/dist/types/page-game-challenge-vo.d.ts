import { GameChallengeVO } from './game-challenge-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageGameChallengeVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: GameChallengeVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-game-challenge-vo.d.ts.map