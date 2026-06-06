import { OrderingOrderItemOutput } from './ordering-order-item-output';
export interface OrderingSubmitOrderOutput {
    orderId?: string;
    orderSn?: string;
    status?: string;
    statusName?: string;
    totalAmount?: string;
    totalQuantity?: number;
    serviceMode?: string;
    sourceChannel?: string;
    deliveryFee?: string;
    receiverName?: string;
    receiverPhone?: string;
    receiverAddress?: string;
    expireTime?: string;
    items?: OrderingOrderItemOutput[];
}
//# sourceMappingURL=ordering-submit-order-output.d.ts.map