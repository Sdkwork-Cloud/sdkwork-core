import { OrderingDeliveryAddressOutput } from './ordering-delivery-address-output';
import { OrderingOrderItemOutput } from './ordering-order-item-output';
export interface OrderingOrderPreviewOutput {
    serviceMode?: string;
    sourceChannel?: string;
    goodsAmount?: string;
    deliveryFee?: string;
    payableAmount?: string;
    totalQuantity?: number;
    remark?: string;
    address?: OrderingDeliveryAddressOutput;
    items?: OrderingOrderItemOutput[];
}
//# sourceMappingURL=ordering-order-preview-output.d.ts.map