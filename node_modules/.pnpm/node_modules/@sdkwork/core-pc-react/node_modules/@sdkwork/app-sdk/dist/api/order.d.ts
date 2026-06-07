import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { OrderCancelForm, OrderCreateForm, OrderPayForm, PlusApiResultOrderDetailVO, PlusApiResultOrderPaymentSuccessVO, PlusApiResultOrderStatisticsVO, PlusApiResultOrderStatusVO, PlusApiResultOrderVO, PlusApiResultPageOrderVO, PlusApiResultPaymentParamsVO, PlusApiResultVoid, RefundApplyForm } from '../types';
export declare class OrderApi {
    private client;
    constructor(client: HttpClient);
    /** List orders */
    listOrders(params?: QueryParams): Promise<PlusApiResultPageOrderVO>;
    /** Create order */
    createOrder(body: OrderCreateForm): Promise<PlusApiResultOrderVO>;
    /** Apply refund */
    applyRefund(orderId: string | number, body: RefundApplyForm): Promise<PlusApiResultVoid>;
    /** Pay order */
    pay(orderId: string | number, body: OrderPayForm): Promise<PlusApiResultPaymentParamsVO>;
    /** Confirm receipt */
    confirmReceipt(orderId: string | number): Promise<PlusApiResultVoid>;
    /** Cancel order */
    cancel(orderId: string | number, body: OrderCancelForm): Promise<PlusApiResultVoid>;
    /** Get order detail */
    getOrderDetail(orderId: string | number): Promise<PlusApiResultOrderDetailVO>;
    /** Delete order */
    deleteOrder(orderId: string | number): Promise<PlusApiResultVoid>;
    /** Get order status */
    getOrderStatus(orderId: string | number): Promise<PlusApiResultOrderStatusVO>;
    /** Query payment success */
    getOrderPaymentSuccess(orderId: string | number): Promise<PlusApiResultOrderPaymentSuccessVO>;
    /** Get order statistics */
    getOrderStatistics(): Promise<PlusApiResultOrderStatisticsVO>;
}
export declare function createOrderApi(client: HttpClient): OrderApi;
//# sourceMappingURL=order.d.ts.map