/** 设备消息响应 */
export interface DeviceMessageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 消息ID */
    id?: string;
    /** 消息ID（兼容字段） */
    messageId?: string;
    /** 设备ID */
    deviceId?: string;
    /** 消息类型 */
    type?: string;
    /** 消息方向 */
    direction?: string;
    /** 消息负载 */
    payload?: Record<string, unknown>;
    /** 消息主题 */
    topic?: string;
    /** 是否已处理 */
    processed?: boolean;
    /** 错误信息 */
    error?: string;
}
//# sourceMappingURL=device-message-vo.d.ts.map