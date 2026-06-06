import { CouponInfoVO } from './coupon-info-vo';
import { OrderAddressVO } from './order-address-vo';
import { OrderItemVO } from './order-item-vo';
/** Order detail response */
export interface OrderDetailVO {
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
    /** Order type name */
    orderTypeName?: string;
    /** Order subject */
    subject?: string;
    /** Product id */
    productId?: string;
    /** Product image */
    productImage?: string;
    /** Product quantity */
    quantity?: number;
    /** Product amount */
    productAmount?: string;
    /** Shipping amount */
    shippingAmount?: string;
    /** Discount amount */
    discountAmount?: string;
    /** Tax amount */
    taxAmount?: string;
    /** Total amount */
    totalAmount?: string;
    /** Paid amount */
    paidAmount?: string;
    /** Paid points amount */
    paidPointsAmount?: string;
    /** Refunded amount */
    refundedAmount?: string;
    /** Order status */
    status?: string;
    /** Order status name */
    statusName?: string;
    /** Refund status */
    refundStatus?: string;
    /** Refund status name */
    refundStatusName?: string;
    /** Payment method */
    paymentMethod?: string;
    /** Payment provider */
    paymentProvider?: string;
    /** Transaction serial number */
    transactionId?: string;
    /** Out trade number */
    outTradeNo?: string;
    /** Currency */
    currency?: string;
    /** Payment time */
    payTime?: string;
    /** Expiration time */
    expireTime?: string;
    /** Completion time */
    completeTime?: string;
    /** Cancellation time */
    cancelTime?: string;
    /** Remark */
    remark?: string;
    /** Merchant remark */
    merchantRemark?: string;
    /** Source channel */
    sourceChannel?: string;
    /** User id */
    userId?: number;
    /** Username */
    username?: string;
    /** Email */
    email?: string;
    /** Receiver name */
    receiverName?: string;
    /** Receiver phone */
    receiverPhone?: string;
    /** Receiver address */
    receiverAddress?: string;
    /** Logistics company */
    logisticsCompany?: string;
    /** Logistics number */
    logisticsNo?: string;
    /** Delivery time */
    deliverTime?: string;
    /** Coupon information */
    couponInfo?: CouponInfoVO;
    /** Order item list */
    items?: OrderItemVO[];
    /** Order address */
    address?: OrderAddressVO;
}
//# sourceMappingURL=order-detail-vo.d.ts.map