/** 设备响应 */
export interface DeviceVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 设备ID */
    deviceId?: string;
    /** 标准设备类型字段 */
    type?: string;
    /** 设备类型 */
    deviceType?: string;
    /** 标准设备名称字段 */
    name?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 推送令牌 */
    pushToken?: string;
    /** 设备描述 */
    description?: string;
    /** 设备状态 */
    status?: string;
    /** 设备IP地址 */
    ipAddress?: string;
    /** 设备MAC地址 */
    macAddress?: string;
    /** 设备元数据 */
    metadata?: Record<string, unknown>;
    /** 关联用户ID */
    userId?: string;
    /** 操作系统版本 */
    osVersion?: string;
    /** 应用版本 */
    appVersion?: string;
    /** 是否活跃 */
    isActive?: boolean;
    /** 注册时间 */
    registerTime?: string;
    /** 最后活跃时间 */
    lastActiveAt?: string;
    id?: string;
}
//# sourceMappingURL=device-vo.d.ts.map