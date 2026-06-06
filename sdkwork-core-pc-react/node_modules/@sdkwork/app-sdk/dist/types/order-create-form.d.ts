import { OrderItemForm } from './order-item-form';
export interface OrderCreateForm {
    orderType: string;
    productId?: string;
    quantity?: number;
    items?: OrderItemForm[];
    addressId?: string;
    paymentMethod?: string;
    couponId?: string;
    remark?: string;
    sourceChannel?: string;
    rechargePoints?: number;
    orderPayloadValid?: boolean;
}
//# sourceMappingURL=order-create-form.d.ts.map