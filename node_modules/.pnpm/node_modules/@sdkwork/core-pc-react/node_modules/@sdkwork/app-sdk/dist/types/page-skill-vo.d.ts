import { PageableObject } from './pageable-object';
import { SkillVO } from './skill-vo';
import { SortObject } from './sort-object';
export interface PageSkillVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: SkillVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
    records?: SkillVO[];
    total?: number;
}
//# sourceMappingURL=page-skill-vo.d.ts.map