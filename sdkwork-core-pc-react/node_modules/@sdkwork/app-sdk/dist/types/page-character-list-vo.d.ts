import { CharacterListVO } from './character-list-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageCharacterListVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: CharacterListVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-character-list-vo.d.ts.map