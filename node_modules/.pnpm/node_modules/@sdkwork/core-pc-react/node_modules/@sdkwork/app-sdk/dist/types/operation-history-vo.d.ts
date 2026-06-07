export interface OperationHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: string;
    /** 操作类型 */
    action?: string;
    /** 操作描述 */
    description?: string;
    /** 操作对象类型 */
    targetType?: string;
    /** 操作对象ID */
    targetId?: string;
    /** 操作对象名称 */
    targetName?: string;
    /** 操作结果 */
    result?: string;
    /** 操作时间 */
    operationTime?: string;
    /** 操作IP */
    ipAddress?: string;
    /** 用户代理 */
    userAgent?: string;
}
//# sourceMappingURL=operation-history-vo.d.ts.map