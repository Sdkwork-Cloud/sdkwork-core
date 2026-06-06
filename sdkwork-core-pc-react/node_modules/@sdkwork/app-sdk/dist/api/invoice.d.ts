import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { InvoiceCancelForm, InvoiceCreateForm, InvoiceUpdateForm, PlusApiResultInvoiceDetailVO, PlusApiResultInvoiceStatisticsVO, PlusApiResultInvoiceVO, PlusApiResultListInvoiceItemVO, PlusApiResultPageInvoiceVO, PlusApiResultVoid } from '../types';
export declare class InvoiceApi {
    private client;
    constructor(client: HttpClient);
    /** 获取发票详情 */
    getInvoice(invoiceId: string | number): Promise<PlusApiResultInvoiceDetailVO>;
    /** 更新发票 */
    updateInvoice(invoiceId: string | number, body: InvoiceUpdateForm): Promise<PlusApiResultInvoiceVO>;
    /** 创建发票 */
    createInvoice(body: InvoiceCreateForm): Promise<PlusApiResultInvoiceVO>;
    /** 提交发票 */
    submit(invoiceId: string | number): Promise<PlusApiResultInvoiceVO>;
    /** 作废发票 */
    cancel(invoiceId: string | number, body: InvoiceCancelForm): Promise<PlusApiResultVoid>;
    /** 获取发票明细 */
    getInvoiceItems(invoiceId: string | number): Promise<PlusApiResultListInvoiceItemVO>;
    /** 获取发票统计 */
    getInvoiceStatistics(): Promise<PlusApiResultInvoiceStatisticsVO>;
    /** 搜索发票 */
    searchInvoices(params?: QueryParams): Promise<PlusApiResultPageInvoiceVO>;
    /** 获取我的发票 */
    getMyInvoices(params?: QueryParams): Promise<PlusApiResultPageInvoiceVO>;
}
export declare function createInvoiceApi(client: HttpClient): InvoiceApi;
//# sourceMappingURL=invoice.d.ts.map