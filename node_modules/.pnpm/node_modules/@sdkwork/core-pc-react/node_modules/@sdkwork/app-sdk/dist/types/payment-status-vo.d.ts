/** Payment status response */
export interface PaymentStatusVO {
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
    /** Status name */
    statusName?: string;
    /** Payment amount */
    amount?: string;
    /** Payment time */
    payTime?: number;
    /** Payment method */
    paymentMethod?: string;
    /** Payment id */
    paymentId?: number;
    /** Payment serial number */
    paymentSn?: string;
    /** Order id */
    orderId?: number;
    /** Payment provider */
    paymentProvider?: string;
    /** Transaction id */
    transactionId?: string;
    /** Out trade number */
    outTradeNo?: string;
    /** Success time */
    successTime?: string;
}
//# sourceMappingURL=payment-status-vo.d.ts.map