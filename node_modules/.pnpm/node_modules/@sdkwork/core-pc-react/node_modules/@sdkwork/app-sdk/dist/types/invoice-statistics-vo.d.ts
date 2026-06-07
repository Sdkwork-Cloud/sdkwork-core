/** 发票统计响应 */
export interface InvoiceStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总发票数 */
    totalInvoices?: number;
    /** 待开票数 */
    pendingInvoices?: number;
    /** 已开票数 */
    completedInvoices?: number;
    /** 总金额 */
    totalAmount?: number;
}
//# sourceMappingURL=invoice-statistics-vo.d.ts.map