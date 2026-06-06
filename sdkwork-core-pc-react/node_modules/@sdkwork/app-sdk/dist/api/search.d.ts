import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AdvancedSearchRequest, PlusApiResultGlobalSearchVO, PlusApiResultListHotSearchVO, PlusApiResultListSearchHistoryVO, PlusApiResultListSearchSuggestionVO, PlusApiResultPageAssetSearchResult, PlusApiResultPageNoteSearchResult, PlusApiResultPageProjectSearchResult, PlusApiResultPageSearchResult, PlusApiResultPageUserSearchResult, PlusApiResultSearchFiltersVO, PlusApiResultSearchStatisticsVO, PlusApiResultVoid, SearchHistoryAddRequest } from '../types';
export declare class SearchApi {
    private client;
    constructor(client: HttpClient);
    /** 搜索历史 */
    getSearchHistory(params?: QueryParams): Promise<PlusApiResultListSearchHistoryVO>;
    /** 添加搜索历史 */
    addSearchHistory(body: SearchHistoryAddRequest): Promise<PlusApiResultVoid>;
    /** 清空搜索历史 */
    clearSearchHistory(): Promise<PlusApiResultVoid>;
    /** 高级搜索 */
    advanced(body: AdvancedSearchRequest): Promise<PlusApiResultPageSearchResult>;
    /** 全局搜索 */
    global(params?: QueryParams): Promise<PlusApiResultGlobalSearchVO>;
    /** 搜索用户 */
    users(params?: QueryParams): Promise<PlusApiResultPageUserSearchResult>;
    /** 搜索建议 */
    getSearchSuggestions(params?: QueryParams): Promise<PlusApiResultListSearchSuggestionVO>;
    /** 搜索统计 */
    getSearchStatistics(): Promise<PlusApiResultSearchStatisticsVO>;
    /** 搜索项目 */
    projects(params?: QueryParams): Promise<PlusApiResultPageProjectSearchResult>;
    /** 搜索笔记 */
    notes(params?: QueryParams): Promise<PlusApiResultPageNoteSearchResult>;
    /** 热门搜索 */
    getHotSearches(params?: QueryParams): Promise<PlusApiResultListHotSearchVO>;
    /** 筛选条件 */
    getSearchFilters(params?: QueryParams): Promise<PlusApiResultSearchFiltersVO>;
    /** 搜索资源 */
    assets(params?: QueryParams): Promise<PlusApiResultPageAssetSearchResult>;
    /** 删除搜索历史 */
    deleteSearchHistory(keyword: string | number): Promise<PlusApiResultVoid>;
}
export declare function createSearchApi(client: HttpClient): SearchApi;
//# sourceMappingURL=search.d.ts.map