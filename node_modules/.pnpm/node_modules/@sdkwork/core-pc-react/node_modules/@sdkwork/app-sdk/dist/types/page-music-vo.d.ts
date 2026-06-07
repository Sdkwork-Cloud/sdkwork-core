import { MusicVO } from './music-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageMusicVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: MusicVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-music-vo.d.ts.map