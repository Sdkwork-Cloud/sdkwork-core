import { CharacterVO } from './character-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCharacterVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CharacterVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-character-vo.d.ts.map