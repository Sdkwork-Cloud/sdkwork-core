/** Order statistics response */
export interface OrderStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Total order count */
    totalOrders?: number;
    /** Pending payment order count */
    pendingPayment?: number;
    /** Pending shipment order count */
    pendingShipment?: number;
    /** Pending receipt order count */
    pendingReceipt?: number;
    /** Completed order count */
    completed?: number;
    /** Total transaction amount */
    totalAmount?: string;
}
//# sourceMappingURL=order-statistics-vo.d.ts.map