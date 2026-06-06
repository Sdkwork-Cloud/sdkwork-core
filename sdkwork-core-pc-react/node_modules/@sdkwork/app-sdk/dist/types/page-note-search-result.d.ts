import { NoteSearchResult } from './note-search-result';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageNoteSearchResult {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: NoteSearchResult[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-note-search-result.d.ts.map