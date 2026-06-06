import { AssetSearchResult } from './asset-search-result';
import { NoteSearchResult } from './note-search-result';
import { ProjectSearchResult } from './project-search-result';
import { UserSearchResult } from './user-search-result';
/** 全局搜索响应 */
export interface GlobalSearchVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 项目搜索结果 */
    projects?: ProjectSearchResult[];
    /** 资源搜索结果 */
    assets?: AssetSearchResult[];
    /** 笔记搜索结果 */
    notes?: NoteSearchResult[];
    /** 用户搜索结果 */
    users?: UserSearchResult[];
}
//# sourceMappingURL=global-search-vo.d.ts.map