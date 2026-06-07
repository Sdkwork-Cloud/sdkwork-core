import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CollectionCreateForm, CollectionItemAddForm, CollectionItemPositionForm, CollectionUpdateForm, PlusApiResultCollectionDetailVO, PlusApiResultCollectionItemVO, PlusApiResultCollectionVO, PlusApiResultListCollectionItemVO, PlusApiResultListCollectionTreeVO, PlusApiResultListCollectionVO, PlusApiResultPageCollectionVO, PlusApiResultVoid } from '../types';
export declare class CollectionApi {
    private client;
    constructor(client: HttpClient);
    /** 获取合集详情 */
    getCollection(collectionId: string | number): Promise<PlusApiResultCollectionDetailVO>;
    /** 更新合集 */
    updateCollection(collectionId: string | number, body: CollectionUpdateForm): Promise<PlusApiResultCollectionVO>;
    /** 删除合集 */
    deleteCollection(collectionId: string | number): Promise<PlusApiResultVoid>;
    /** 更新内容排序 */
    updateItemPositions(collectionId: string | number, body: CollectionItemPositionForm): Promise<PlusApiResultVoid>;
    /** 创建合集 */
    createCollection(body: CollectionCreateForm): Promise<PlusApiResultCollectionVO>;
    /** 获取合集内容列表 */
    getCollectionItems(collectionId: string | number, params?: QueryParams): Promise<PlusApiResultListCollectionItemVO>;
    /** 添加内容到合集 */
    addItem(collectionId: string | number, body: CollectionItemAddForm): Promise<PlusApiResultCollectionItemVO>;
    /** 置顶内容 */
    pinItem(collectionId: string | number, itemId: string | number): Promise<PlusApiResultVoid>;
    /** 取消置顶 */
    unpinItem(collectionId: string | number, itemId: string | number): Promise<PlusApiResultVoid>;
    /** 获取合集路径 */
    getCollectionPath(collectionId: string | number): Promise<PlusApiResultListCollectionVO>;
    /** 获取合集树 */
    getCollectionTree(params?: QueryParams): Promise<PlusApiResultListCollectionTreeVO>;
    /** 搜索合集 */
    searchCollections(params?: QueryParams): Promise<PlusApiResultPageCollectionVO>;
    /** 获取我的合集 */
    getMyCollections(params?: QueryParams): Promise<PlusApiResultPageCollectionVO>;
    /** 从合集移除内容 */
    removeItem(collectionId: string | number, contentId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createCollectionApi(client: HttpClient): CollectionApi;
//# sourceMappingURL=collection.d.ts.map