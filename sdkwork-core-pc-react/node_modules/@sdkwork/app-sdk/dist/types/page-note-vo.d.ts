import { NoteVO } from './note-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageNoteVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: NoteVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-note-vo.d.ts.map