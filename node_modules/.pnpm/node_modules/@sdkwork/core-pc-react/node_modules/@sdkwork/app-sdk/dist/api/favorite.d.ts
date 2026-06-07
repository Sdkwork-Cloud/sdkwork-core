import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { FavoriteAddForm, FavoriteBatchCheckForm, FavoriteBatchMoveForm, FavoriteFolderCreateForm, FavoriteFolderUpdateForm, FavoriteMoveForm, PlusApiResultFavoriteCheckVO, PlusApiResultFavoriteDetailVO, PlusApiResultFavoriteFolderVO, PlusApiResultFavoriteStatisticsVO, PlusApiResultFavoriteVO, PlusApiResultListFavoriteCheckVO, PlusApiResultListFavoriteFolderVO, PlusApiResultListFavoriteItemVO, PlusApiResultListFavoriteTypeCountVO, PlusApiResultPageFavoriteItemVO, PlusApiResultVoid } from '../types';
export declare class FavoriteApi {
    private client;
    constructor(client: HttpClient);
    /** 移动收藏 */
    moveFavoriteToFolder(favoriteId: string | number, body: FavoriteMoveForm): Promise<PlusApiResultFavoriteVO>;
    /** 更新收藏夹 */
    updateFavoriteFolder(folderId: string | number, body: FavoriteFolderUpdateForm): Promise<PlusApiResultFavoriteFolderVO>;
    /** 删除收藏夹 */
    deleteFavoriteFolder(folderId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 批量移动收藏 */
    batchMoveFavorites(body: FavoriteBatchMoveForm): Promise<PlusApiResultVoid>;
    /** 收藏列表 */
    listFavorites(params?: QueryParams): Promise<PlusApiResultPageFavoriteItemVO>;
    /** 添加收藏 */
    add(body: FavoriteAddForm): Promise<PlusApiResultFavoriteVO>;
    /** 收藏夹列表 */
    listFavoriteFolders(): Promise<PlusApiResultListFavoriteFolderVO>;
    /** 创建收藏夹 */
    createFavoriteFolder(body: FavoriteFolderCreateForm): Promise<PlusApiResultFavoriteFolderVO>;
    /** 批量检查收藏 */
    batchCheckFavorites(body: FavoriteBatchCheckForm): Promise<PlusApiResultListFavoriteCheckVO>;
    /** 收藏详情 */
    getFavoriteDetail(favoriteId: string | number): Promise<PlusApiResultFavoriteDetailVO>;
    /** 取消收藏 */
    remove(favoriteId: string | number): Promise<PlusApiResultVoid>;
    /** 收藏统计 */
    getFavoriteStatistics(): Promise<PlusApiResultFavoriteStatisticsVO>;
    /** 最近收藏 */
    getRecentFavorites(params?: QueryParams): Promise<PlusApiResultListFavoriteItemVO>;
    /** 各类型收藏数 */
    getFavoriteCountByType(): Promise<PlusApiResultListFavoriteTypeCountVO>;
    /** 检查收藏状态 */
    check(params?: QueryParams): Promise<PlusApiResultFavoriteCheckVO>;
    /** 按目标取消收藏 */
    removeFavoriteByTarget(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 批量取消收藏 */
    batchRemoveFavorites(): Promise<PlusApiResultVoid>;
}
export declare function createFavoriteApi(client: HttpClient): FavoriteApi;
//# sourceMappingURL=favorite.d.ts.map