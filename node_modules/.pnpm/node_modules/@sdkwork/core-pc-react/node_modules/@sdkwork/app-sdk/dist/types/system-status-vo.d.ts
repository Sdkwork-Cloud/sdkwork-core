import { ServiceStatus } from './service-status';
/** 系统状态VO */
export interface SystemStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 系统状态 */
    status?: string;
    /** 状态消息 */
    message?: string;
    /** 时间戳 */
    timestamp?: string;
    /** 系统版本 */
    version?: string;
    /** 服务状态 */
    services?: ServiceStatus;
}
//# sourceMappingURL=system-status-vo.d.ts.map