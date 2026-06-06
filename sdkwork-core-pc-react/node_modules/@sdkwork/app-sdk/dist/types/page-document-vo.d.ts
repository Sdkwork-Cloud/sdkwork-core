import { DocumentVO } from './document-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageDocumentVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: DocumentVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-document-vo.d.ts.map