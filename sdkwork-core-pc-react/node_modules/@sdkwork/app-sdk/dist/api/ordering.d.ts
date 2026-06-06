import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { OrderingCancelOrderInput, OrderingCreateOrderInput, OrderingPreviewOrderInput, PlusApiResultListOrderingCategoryOutput, PlusApiResultListOrderingMenuItemOutput, PlusApiResultOrderingMenuDetailOutput, PlusApiResultOrderingOrderDetailOutput, PlusApiResultOrderingOrderPreviewOutput, PlusApiResultOrderingShopDetailOutput, PlusApiResultOrderingShopHomeOutput, PlusApiResultOrderingSubmitOrderOutput, PlusApiResultPageOrderingMenuItemOutput, PlusApiResultPageOrderingOrderSummaryOutput, PlusApiResultPageOrderingShopOutput, PlusApiResultVoid } from '../types';
export declare class OrderingApi {
    private client;
    constructor(client: HttpClient);
    /** List orders */
    getOrders(params?: QueryParams): Promise<PlusApiResultPageOrderingOrderSummaryOutput>;
    /** Submit order */
    submitOrder(body: OrderingCreateOrderInput): Promise<PlusApiResultOrderingSubmitOrderOutput>;
    /** Cancel order */
    cancelOrder(orderId: string | number, body?: OrderingCancelOrderInput): Promise<PlusApiResultVoid>;
    /** Preview order */
    previewOrder(body: OrderingPreviewOrderInput): Promise<PlusApiResultOrderingOrderPreviewOutput>;
    /** Get ordering shops */
    getShops(params?: QueryParams): Promise<PlusApiResultPageOrderingShopOutput>;
    /** Get ordering shop detail */
    getShopDetail(shopId: string | number): Promise<PlusApiResultOrderingShopDetailOutput>;
    /** Get shop menu */
    getShopMenu(shopId: string | number, params?: QueryParams): Promise<PlusApiResultPageOrderingMenuItemOutput>;
    /** Get shop menu detail */
    getShopMenuDetail(shopId: string | number, productId: string | number): Promise<PlusApiResultOrderingMenuDetailOutput>;
    /** Get shop hot menu */
    getShopHotMenu(shopId: string | number, params?: QueryParams): Promise<PlusApiResultListOrderingMenuItemOutput>;
    /** Get shop menu categories */
    getShopMenuCategories(shopId: string | number): Promise<PlusApiResultListOrderingCategoryOutput>;
    /** Get shop home */
    getShopHome(shopId: string | number, params?: QueryParams): Promise<PlusApiResultOrderingShopHomeOutput>;
    /** Get order detail */
    getOrderDetail(orderId: string | number): Promise<PlusApiResultOrderingOrderDetailOutput>;
    /** Get menu */
    getMenu(params?: QueryParams): Promise<PlusApiResultPageOrderingMenuItemOutput>;
    /** Get menu detail */
    getMenuDetail(productId: string | number): Promise<PlusApiResultOrderingMenuDetailOutput>;
    /** Get hot menu */
    getHotMenu(params?: QueryParams): Promise<PlusApiResultListOrderingMenuItemOutput>;
    /** Get menu categories */
    getMenuCategories(): Promise<PlusApiResultListOrderingCategoryOutput>;
}
export declare function createOrderingApi(client: HttpClient): OrderingApi;
//# sourceMappingURL=ordering.d.ts.map