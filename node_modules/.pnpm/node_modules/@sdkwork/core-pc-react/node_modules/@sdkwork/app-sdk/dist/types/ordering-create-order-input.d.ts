import { OrderingCreateOrderItemInput } from './ordering-create-order-item-input';
export interface OrderingCreateOrderInput {
    items?: OrderingCreateOrderItemInput[];
    addressId?: string;
    serviceMode?: string;
    remark?: string;
    sourceChannel?: string;
    itemsValid?: boolean;
}
//# sourceMappingURL=ordering-create-order-input.d.ts.map