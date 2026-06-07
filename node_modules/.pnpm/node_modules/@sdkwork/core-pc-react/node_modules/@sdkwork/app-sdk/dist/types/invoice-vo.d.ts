/** 发票响应 */
export interface InvoiceVO {
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
    /** 总金额 */
    totalAmount?: number;
    /** 货币 */
    currency?: string;
}
//# sourceMappingURL=invoice-vo.d.ts.map