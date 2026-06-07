import { AssetVO } from './asset-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAssetVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AssetVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-asset-vo.d.ts.map