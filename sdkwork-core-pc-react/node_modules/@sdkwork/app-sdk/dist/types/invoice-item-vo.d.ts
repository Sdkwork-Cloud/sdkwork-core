/** 发票明细项响应 */
export interface InvoiceItemVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 明细项ID */
    itemId?: string;
    /** 商品名称 */
    productName?: string;
    /** 规格型号 */
    specification?: string;
    /** 单位 */
    unit?: string;
    /** 数量 */
    quantity?: number;
    /** 单价(不含税) */
    unitPriceExcludingTax?: number;
    /** 金额(不含税) */
    amountExcludingTax?: number;
    /** 税额 */
    taxAmount?: number;
    /** 总金额 */
    totalAmount?: number;
    /** 税率 */
    taxRate?: number;
}
//# sourceMappingURL=invoice-item-vo.d.ts.map