/** Payment response */
export interface PaymentVO {
    /** Created time */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Payment order number */
    paymentOrderId?: string;
    /** Merchant order number */
    merchantOrderId?: string;
    /** Payment status */
    status?: string;
    /** Payment amount */
    amount?: string;
    /** Payment method */
    paymentMethod?: string;
    /** Payment URL */
    paymentUrl?: string;
    /** QR code */
    qrCode?: string;
    /** Payment id */
    paymentId?: number;
    /** Payment serial number */
    paymentSn?: string;
    /** Order id */
    orderId?: number;
    /** Order subject */
    subject?: string;
    /** Payment provider */
    paymentProvider?: string;
    /** Payment provider name */
    paymentProviderName?: string;
    /** Product type */
    productType?: string;
    /** Product type name */
    productTypeName?: string;
    /** Status name */
    statusName?: string;
    /** Expiration time */
    expireTime?: string;
    /** Whether status polling is required */
    needQuery?: boolean;
    /** Query interval */
    queryInterval?: number;
    /** Remark */
    remark?: string;
    /** Payment parameters */
    paymentParams?: Record<string, unknown>;
    /** Transaction id */
    transactionId?: string;
    /** Out trade number */
    outTradeNo?: string;
    /** Success time */
    successTime?: string;
}
//# sourceMappingURL=payment-vo.d.ts.map