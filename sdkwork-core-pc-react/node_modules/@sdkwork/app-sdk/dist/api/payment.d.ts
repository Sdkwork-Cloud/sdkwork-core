import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { CallbackRequest, CallbackResponse, PaymentCreateForm, PaymentReconcileForm, PlusApiResultListPaymentMethodVO, PlusApiResultListPaymentStatusVO, PlusApiResultPagePaymentStatusVO, PlusApiResultPaymentStatisticsVO, PlusApiResultPaymentStatusVO, PlusApiResultPaymentVO, PlusApiResultVoid } from '../types';
export declare class PaymentApi {
    private client;
    constructor(client: HttpClient);
    /** Create payment */
    createPayment(body: PaymentCreateForm): Promise<PlusApiResultPaymentVO>;
    /** Close payment */
    close(paymentId: string | number): Promise<PlusApiResultVoid>;
    /** Reconcile payment */
    reconcile(body: PaymentReconcileForm): Promise<PlusApiResultPaymentStatusVO>;
    /** Handle generic callback */
    callback(provider: string | number, body: CallbackRequest): Promise<CallbackResponse>;
    /** Handle WeChat callback */
    wechatPayCallback(body: string): Promise<string>;
    /** Handle Alipay callback */
    alipayCallback(params?: QueryParams): Promise<string>;
    /** Get payment detail */
    getPaymentDetail(paymentId: string | number): Promise<PlusApiResultPaymentStatusVO>;
    /** Get payment status */
    getPaymentStatus(paymentId: string | number): Promise<PlusApiResultPaymentStatusVO>;
    /** Get payment statistics */
    getPaymentStatistics(): Promise<PlusApiResultPaymentStatisticsVO>;
    /** List payment records */
    listPaymentRecords(params?: QueryParams): Promise<PlusApiResultPagePaymentStatusVO>;
    /** Get payment status by out trade number */
    getPaymentStatusByOutTradeNo(outTradeNo: string | number): Promise<PlusApiResultPaymentStatusVO>;
    /** List order payments */
    listOrderPayments(orderId: string | number): Promise<PlusApiResultListPaymentStatusVO>;
    /** List payment methods */
    listPaymentMethods(params?: QueryParams): Promise<PlusApiResultListPaymentMethodVO>;
}
export declare function createPaymentApi(client: HttpClient): PaymentApi;
//# sourceMappingURL=payment.d.ts.map