import { AssetSearchResult } from './asset-search-result';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageAssetSearchResult {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: AssetSearchResult[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-asset-search-result.d.ts.map