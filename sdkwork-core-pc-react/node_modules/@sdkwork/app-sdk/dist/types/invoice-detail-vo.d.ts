import { InvoiceItemVO } from './invoice-item-vo';
/** 发票详情响应 */
export interface InvoiceDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 发票ID */
    invoiceId?: string;
    /** 发票抬头 */
    title?: string;
    /** 抬头类型 */
    titleType?: string;
    /** 纳税人识别号 */
    taxNo?: string;
    /** 发票类型 */
    type?: string;
    /** 发票状态 */
    status?: string;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票号码 */
    invoiceNo?: string;
    /** 金额(不含税) */
    amountExcludingTax?: number;
    /** 税额 */
    taxAmount?: number;
    /** 总金额 */
    totalAmount?: number;
    /** 税率 */
    taxRate?: number;
    /** 货币 */
    currency?: string;
    /** 开户银行 */
    bankName?: string;
    /** 银行账号 */
    bankAccount?: string;
    /** 注册地址 */
    registerAddress?: string;
    /** 注册电话 */
    registerPhone?: string;
    /** 电子发票URL */
    electronicUrl?: string;
    /** 开票时间 */
    invoiceTime?: string;
    /** 发票明细 */
    items?: InvoiceItemVO[];
}
//# sourceMappingURL=invoice-detail-vo.d.ts.map