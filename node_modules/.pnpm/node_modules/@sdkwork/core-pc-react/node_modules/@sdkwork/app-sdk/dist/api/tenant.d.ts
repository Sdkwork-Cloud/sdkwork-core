import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultListTenantTypeVO, PlusApiResultPageTenantVO, PlusApiResultTenantDetailVO, PlusApiResultTenantStatisticsVO, PlusApiResultTenantVO, TenantCreateForm, TenantUpdateForm } from '../types';
export declare class TenantApi {
    private client;
    constructor(client: HttpClient);
    /** 获取租户详情 */
    getTenant(tenantId: string | number): Promise<PlusApiResultTenantDetailVO>;
    /** 更新租户 */
    updateTenant(tenantId: string | number, body: TenantUpdateForm): Promise<PlusApiResultTenantVO>;
    /** 创建租户 */
    createTenant(body: TenantCreateForm): Promise<PlusApiResultTenantVO>;
    /** 冻结租户 */
    freeze(tenantId: string | number): Promise<PlusApiResultTenantVO>;
    /** 注销租户 */
    close(tenantId: string | number): Promise<PlusApiResultTenantVO>;
    /** 激活租户 */
    activate(tenantId: string | number): Promise<PlusApiResultTenantVO>;
    /** 获取租户类型列表 */
    getTenantTypes(): Promise<PlusApiResultListTenantTypeVO>;
    /** 获取租户统计 */
    getTenantStatistics(): Promise<PlusApiResultTenantStatisticsVO>;
    /** 获取根租户 */
    getRoot(): Promise<PlusApiResultTenantDetailVO>;
    /** 获取租户列表 */
    getTenantList(params?: QueryParams): Promise<PlusApiResultPageTenantVO>;
    /** 根据编码获取租户 */
    getTenantByCode(code: string | number): Promise<PlusApiResultTenantDetailVO>;
    /** 获取云租户 */
    getCloud(): Promise<PlusApiResultTenantDetailVO>;
}
export declare function createTenantApi(client: HttpClient): TenantApi;
//# sourceMappingURL=tenant.d.ts.map