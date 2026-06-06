import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultBoolean, PlusApiResultListSkuVO, PlusApiResultPageSkuVO, PlusApiResultSkuDetailVO, PlusApiResultSkuStatisticsVO, PlusApiResultSkuStockVO, PlusApiResultSkuVO } from '../types';
export declare class SkusApi {
    private client;
    constructor(client: HttpClient);
    /** 获取SKU详情 */
    getSkuDetail(skuId: string | number): Promise<PlusApiResultSkuDetailVO>;
    /** 获取SKU库存 */
    getSkuStock(skuId: string | number): Promise<PlusApiResultSkuStockVO>;
    /** 检查SKU库存 */
    checkSkuStock(skuId: string | number, params?: QueryParams): Promise<PlusApiResultBoolean>;
    /** 获取产品的SKU列表 */
    getSkuByProduct(productId: string | number, params?: QueryParams): Promise<PlusApiResultPageSkuVO>;
    /** 获取产品SKU统计 */
    getSkuStatistics(productId: string | number): Promise<PlusApiResultSkuStatisticsVO>;
    /** 检查SKU编码是否存在 */
    checkSkuCodeExists(params?: QueryParams): Promise<PlusApiResultBoolean>;
    /** 按编码获取SKU */
    getSkuByCode(skuCode: string | number): Promise<PlusApiResultSkuVO>;
    /** 批量获取SKU */
    batchGet(params?: QueryParams): Promise<PlusApiResultListSkuVO>;
}
export declare function createSkusApi(client: HttpClient): SkusApi;
//# sourceMappingURL=skus.d.ts.map