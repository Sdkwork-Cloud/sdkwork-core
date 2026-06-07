import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AddCartItemForm, BatchSelectForm, PlusApiResultBoolean, PlusApiResultCartItemVO, PlusApiResultCartStatisticsVO, PlusApiResultListCartItemVO, PlusApiResultShoppingCartVO, PlusApiResultVoid, UpdateCartItemForm } from '../types';
export declare class CartApi {
    private client;
    constructor(client: HttpClient);
    /** Update cart item quantity */
    updateItemQuantity(itemId: string | number, body: UpdateCartItemForm): Promise<PlusApiResultCartItemVO>;
    /** Remove cart item */
    removeItem(itemId: string | number): Promise<PlusApiResultVoid>;
    /** Update item selection */
    updateItemSelection(itemId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** Batch update selection */
    batchUpdateSelection(body: BatchSelectForm): Promise<PlusApiResultVoid>;
    /** Get cart items */
    getCartItems(): Promise<PlusApiResultListCartItemVO>;
    /** Add item to cart */
    addItem(body: AddCartItemForm): Promise<PlusApiResultCartItemVO>;
    /** Remove cart items in batch */
    removeItems(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** Get current user cart */
    getMy(): Promise<PlusApiResultShoppingCartVO>;
    /** Clear cart */
    clear(): Promise<PlusApiResultVoid>;
    /** Get cart statistics */
    getCartStatistics(): Promise<PlusApiResultCartStatisticsVO>;
    /** Get selected items */
    getSelectedItems(): Promise<PlusApiResultListCartItemVO>;
    /** Check item in cart */
    checkItemIn(params?: QueryParams): Promise<PlusApiResultBoolean>;
}
export declare function createCartApi(client: HttpClient): CartApi;
//# sourceMappingURL=cart.d.ts.map