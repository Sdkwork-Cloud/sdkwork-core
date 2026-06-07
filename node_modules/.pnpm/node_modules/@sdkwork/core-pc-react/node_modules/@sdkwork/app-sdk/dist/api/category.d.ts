import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CategoryCreateForm, CategoryMoveForm, CategorySortForm, CategoryUpdateForm, PlusApiResultCategoryDetailVO, PlusApiResultCategoryVO, PlusApiResultListCategoryTreeVO, PlusApiResultListCategoryTypeVO, PlusApiResultListCategoryVO, PlusApiResultListTagVO, PlusApiResultTagVO, PlusApiResultVoid, TagCreateForm } from '../types';
export declare class CategoryApi {
    private client;
    constructor(client: HttpClient);
    /** 获取分类详情 */
    getCategoryDetail(categoryId: string | number): Promise<PlusApiResultCategoryDetailVO>;
    /** 更新分类 */
    updateCategory(categoryId: string | number, body: CategoryUpdateForm): Promise<PlusApiResultCategoryVO>;
    /** 删除分类 */
    deleteCategory(categoryId: string | number): Promise<PlusApiResultVoid>;
    /** 更新分类状态 */
    updateCategoryStatus(categoryId: string | number, params?: QueryParams): Promise<PlusApiResultCategoryVO>;
    /** 移动分类 */
    move(categoryId: string | number, body: CategoryMoveForm): Promise<PlusApiResultCategoryVO>;
    /** 排序分类 */
    sortCategories(body: CategorySortForm): Promise<PlusApiResultVoid>;
    /** 获取分类列表 */
    listCategories(params?: QueryParams): Promise<PlusApiResultListCategoryVO>;
    /** 创建分类 */
    createCategory(body: CategoryCreateForm): Promise<PlusApiResultCategoryVO>;
    /** 获取标签列表 */
    listTags(params?: QueryParams): Promise<PlusApiResultListTagVO>;
    /** 创建标签 */
    createTag(body: TagCreateForm): Promise<PlusApiResultTagVO>;
    /** 获取分类路径 */
    getCategoryPath(categoryId: string | number): Promise<PlusApiResultListCategoryVO>;
    /** 获取子分类 */
    getChildren(categoryId: string | number): Promise<PlusApiResultListCategoryVO>;
    /** 获取分类类型 */
    getCategoryTypes(): Promise<PlusApiResultListCategoryTypeVO>;
    /** 获取分类树 */
    getCategoryTree(params?: QueryParams): Promise<PlusApiResultListCategoryTreeVO>;
    /** 删除标签 */
    deleteTag(tagId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createCategoryApi(client: HttpClient): CategoryApi;
//# sourceMappingURL=category.d.ts.map