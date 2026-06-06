/** Shopping cart item response */
export interface CartItemVO {
    /** Created time */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** Cart item id */
    itemId?: string;
    /** Cart item UUID */
    uuid?: string;
    /** Cart id */
    cartId?: string;
    /** Cart group UUID */
    cartGroupUuid?: string;
    /** Product id */
    productId?: string;
    /** SKU id */
    skuId?: string;
    /** SKU name */
    skuName?: string;
    /** SKU code */
    skuCode?: string;
    /** SKU image */
    skuImage?: string;
    /** SKU price */
    skuPrice?: number;
    /** Quantity */
    quantity?: number;
    /** Price when the item was added to the cart */
    price?: number;
    /** Total price */
    totalPrice?: number;
    /** Selected */
    selected?: boolean;
}
//# sourceMappingURL=cart-item-vo.d.ts.map