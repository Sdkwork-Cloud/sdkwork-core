/** Order response */
export interface OrderVO {
    /** Created time */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Order id */
    orderId?: string;
    /** Order serial number */
    orderSn?: string;
    /** Order type */
    orderType?: string;
    /** Order subject */
    subject?: string;
    /** Product image */
    productImage?: string;
    /** Product quantity */
    quantity?: number;
    /** Total amount */
    totalAmount?: string;
    /** Paid amount */
    paidAmount?: string;
    /** Paid points amount */
    paidPointsAmount?: string;
    /** Discount amount */
    discountAmount?: string;
    /** Shipping amount */
    shippingAmount?: string;
    /** Order status */
    status?: string;
    /** Order status name */
    statusName?: string;
    /** Refund status */
    refundStatus?: string;
    /** Payment method */
    paymentMethod?: string;
    /** Payment provider */
    paymentProvider?: string;
    /** Payment time */
    payTime?: string;
    /** Expiration time */
    expireTime?: string;
    /** Remark */
    remark?: string;
}
//# sourceMappingURL=order-vo.d.ts.map