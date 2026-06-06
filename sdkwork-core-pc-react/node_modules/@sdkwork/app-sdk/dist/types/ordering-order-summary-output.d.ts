import { OrderingOrderItemOutput } from './ordering-order-item-output';
export interface OrderingOrderSummaryOutput {
    orderId?: string;
    orderSn?: string;
    subject?: string;
    status?: string;
    statusName?: string;
    totalAmount?: string;
    totalQuantity?: number;
    serviceMode?: string;
    sourceChannel?: string;
    createdAt?: string;
    items?: OrderingOrderItemOutput[];
}
//# sourceMappingURL=ordering-order-summary-output.d.ts.map