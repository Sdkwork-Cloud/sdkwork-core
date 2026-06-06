import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AssetMoveForm, AssetRenameForm, FolderCreateForm, PlusApiResultAssetDetailVO, PlusApiResultAssetStatisticsVO, PlusApiResultDownloadUrlVO, PlusApiResultFolderVO, PlusApiResultListFolderVO, PlusApiResultPageAssetVO, PlusApiResultVoid } from '../types';
export declare class AssetApi {
    private client;
    constructor(client: HttpClient);
    /** 重命名资产 */
    rename(assetId: string | number, body: AssetRenameForm): Promise<PlusApiResultVoid>;
    /** 移动资产 */
    move(assetId: string | number, body: AssetMoveForm): Promise<PlusApiResultVoid>;
    /** 收藏资产 */
    favorite(assetId: string | number): Promise<PlusApiResultVoid>;
    /** 取消收藏 */
    unfavorite(assetId: string | number): Promise<PlusApiResultVoid>;
    /** 获取文件夹列表 */
    listFolders(): Promise<PlusApiResultListFolderVO>;
    /** 创建文件夹 */
    createFolder(body: FolderCreateForm): Promise<PlusApiResultFolderVO>;
    /** 获取资产列表 */
    listAssets(params?: QueryParams): Promise<PlusApiResultPageAssetVO>;
    /** 获取资产详情 */
    getAssetDetail(assetId: string | number): Promise<PlusApiResultAssetDetailVO>;
    /** 删除资产 */
    deleteAsset(assetId: string | number): Promise<PlusApiResultVoid>;
    /** 下载资产 */
    getDownloadUrl(assetId: string | number, params?: QueryParams): Promise<PlusApiResultDownloadUrlVO>;
    /** 获取资产统计 */
    getStatistics(): Promise<PlusApiResultAssetStatisticsVO>;
    /** 删除文件夹 */
    deleteFolder(folderId: string | number): Promise<PlusApiResultVoid>;
    /** 批量删除资产 */
    batchDeleteAssets(): Promise<PlusApiResultVoid>;
}
export declare function createAssetApi(client: HttpClient): AssetApi;
//# sourceMappingURL=asset.d.ts.map