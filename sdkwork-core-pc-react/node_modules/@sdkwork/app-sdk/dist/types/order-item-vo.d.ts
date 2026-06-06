/** Order item response */
export interface OrderItemVO {
    /** Created time */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Order item id */
    id?: string;
    /** Order id */
    orderId?: string;
    /** Category id */
    categoryId?: string;
    /** Product type */
    productType?: string;
    /** Product id */
    productId?: string;
    /** SKU id */
    skuId?: string;
    /** Product name */
    productName?: string;
    /** Product image */
    productImage?: string;
    /** Quantity */
    quantity?: number;
    /** Unit price */
    unitPrice?: string;
    /** Total amount */
    totalAmount?: string;
    /** Discount amount */
    discountAmount?: string;
    /** Paid amount */
    paidAmount?: string;
    /** Refunded amount */
    refundedAmount?: string;
    /** SKU specification */
    skuSpec?: string;
    /** Currency */
    currency?: string;
    /** Refund status */
    refundStatus?: string;
    /** Review status */
    reviewStatus?: string;
    /** Payment provider */
    paymentProvider?: string;
    /** Payment product type */
    paymentProductType?: string;
    /** Expiration time */
    expireTime?: string;
}
//# sourceMappingURL=order-item-vo.d.ts.map