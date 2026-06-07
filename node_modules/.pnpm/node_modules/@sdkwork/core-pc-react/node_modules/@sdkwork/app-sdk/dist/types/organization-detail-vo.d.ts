import { InstallAppList } from './install-app-list';
import { OrganizationMetadata } from './organization-metadata';
/** 组织详情响应 */
export interface OrganizationDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 组织名称 */
    name?: string;
    /** 组织编码 */
    code?: string;
    /** 组织状态 */
    status?: string;
    /** 组织描述 */
    description?: string;
    /** 父组织ID */
    parentId?: number;
    /** 联系人 */
    contactPerson?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 联系邮箱 */
    contactEmail?: string;
    /** 地址 */
    address?: string;
    /** 网站 */
    website?: string;
    /** Logo URL */
    logoUrl?: string;
    /** 元数据 */
    metadata?: OrganizationMetadata;
    /** 安装应用列表 */
    installAppList?: InstallAppList;
    /** 成员数量 */
    memberCount?: number;
    /** 部门数量 */
    departmentCount?: number;
    /** 岗位数量 */
    positionCount?: number;
}
//# sourceMappingURL=organization-detail-vo.d.ts.map