import { InstallAppList } from './install-app-list';
import { TenantMetadata } from './tenant-metadata';
/** 租户详情响应 */
export interface TenantDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 租户名称 */
    name?: string;
    /** 租户编码 */
    code?: string;
    /** 租户类型 */
    type?: string;
    /** 业务类型 */
    bizType?: string;
    /** 业务ID */
    bizId?: number;
    /** 租户状态 */
    status?: string;
    /** 租户描述 */
    description?: string;
    /** 管理员用户ID */
    adminUserId?: number;
    /** 安装应用列表 */
    installAppList?: InstallAppList;
    /** 元数据 */
    metadata?: TenantMetadata;
    /** 联系人 */
    contactPerson?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 令牌有效期(毫秒) */
    tokenExpirationMs?: number;
    /** 刷新令牌有效期(毫秒) */
    refreshTokenExpirationMs?: number;
    /** 过期时间 */
    expireTime?: string;
}
//# sourceMappingURL=tenant-detail-vo.d.ts.map