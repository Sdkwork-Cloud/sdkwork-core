import { OrderingOrderItemOutput } from './ordering-order-item-output';
export interface OrderingOrderDetailOutput {
    orderId?: string;
    orderSn?: string;
    subject?: string;
    status?: string;
    statusName?: string;
    totalAmount?: string;
    paidAmount?: string;
    totalQuantity?: number;
    createdAt?: string;
    expireTime?: string;
    payTime?: string;
    remark?: string;
    serviceMode?: string;
    sourceChannel?: string;
    deliveryFee?: string;
    receiverName?: string;
    receiverPhone?: string;
    receiverAddress?: string;
    items?: OrderingOrderItemOutput[];
}
//# sourceMappingURL=ordering-order-detail-output.d.ts.map