import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultListShopVO, PlusApiResultPageShopVO, PlusApiResultShopDetailVO, PlusApiResultShopStatisticsVO, PlusApiResultShopVO, PlusApiResultVoid, ShopCreateForm, ShopUpdateForm } from '../types';
export declare class ShopApi {
    private client;
    constructor(client: HttpClient);
    /** 获取店铺详情 */
    getShopDetail(shopId: string | number): Promise<PlusApiResultShopDetailVO>;
    /** 更新店铺 */
    updateShop(shopId: string | number, body: ShopUpdateForm): Promise<PlusApiResultShopVO>;
    /** 删除店铺 */
    deleteShop(shopId: string | number): Promise<PlusApiResultVoid>;
    /** 更新店铺状态 */
    updateStatus(shopId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 开店营业 */
    open(shopId: string | number): Promise<PlusApiResultVoid>;
    /** 关店休息 */
    close(shopId: string | number): Promise<PlusApiResultVoid>;
    /** 获取店铺列表 */
    listShops(params?: QueryParams): Promise<PlusApiResultPageShopVO>;
    /** 创建店铺 */
    createShop(body: ShopCreateForm): Promise<PlusApiResultShopVO>;
    /** 获取店铺统计 */
    getStatistics(): Promise<PlusApiResultShopStatisticsVO>;
    /** 获取所有激活店铺 */
    listAllActiveShops(): Promise<PlusApiResultListShopVO>;
}
export declare function createShopApi(client: HttpClient): ShopApi;
//# sourceMappingURL=shop.d.ts.map