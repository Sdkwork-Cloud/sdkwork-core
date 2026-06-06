import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DepartmentCreateForm, OrganizationCreateForm, PlusApiResultDepartmentDetailVO, PlusApiResultDepartmentVO, PlusApiResultListDepartmentDetailVO, PlusApiResultListDepartmentVO, PlusApiResultListOrganizationVO, PlusApiResultListPositionDetailVO, PlusApiResultListPositionVO, PlusApiResultMemberVO, PlusApiResultOrganizationDetailVO, PlusApiResultOrganizationStatisticsVO, PlusApiResultOrganizationVO, PlusApiResultPageMemberVO, PlusApiResultPageOrganizationVO, PlusApiResultPositionDetailVO, PlusApiResultPositionVO, PositionCreateForm } from '../types';
export declare class OrganizationApi {
    private client;
    constructor(client: HttpClient);
    /** 创建组织 */
    createOrganization(body: OrganizationCreateForm): Promise<PlusApiResultOrganizationVO>;
    /** 禁用组织 */
    disable(orgId: string | number): Promise<PlusApiResultOrganizationVO>;
    /** 激活组织 */
    activate(orgId: string | number): Promise<PlusApiResultOrganizationVO>;
    /** 创建岗位 */
    createPosition(body: PositionCreateForm): Promise<PlusApiResultPositionVO>;
    /** 创建部门 */
    createDepartment(body: DepartmentCreateForm): Promise<PlusApiResultDepartmentVO>;
    /** 获取组织详情 */
    getOrganization(orgId: string | number): Promise<PlusApiResultOrganizationDetailVO>;
    /** 获取组织的岗位列表 */
    getPositionsByOrg(orgId: string | number): Promise<PlusApiResultListPositionVO>;
    /** 获取岗位树 */
    getPositionTree(orgId: string | number): Promise<PlusApiResultListPositionDetailVO>;
    /** 获取组织成员 */
    getMembersByOrg(orgId: string | number, params?: QueryParams): Promise<PlusApiResultPageMemberVO>;
    /** 获取组织的部门列表 */
    getDepartmentsByOrg(orgId: string | number): Promise<PlusApiResultListDepartmentVO>;
    /** 获取部门树 */
    getDepartmentTree(orgId: string | number): Promise<PlusApiResultListDepartmentDetailVO>;
    /** 获取子组织 */
    getChildOrganizations(orgId: string | number): Promise<PlusApiResultListOrganizationVO>;
    /** 获取组织统计 */
    getOrganizationStatistics(): Promise<PlusApiResultOrganizationStatisticsVO>;
    /** 获取岗位详情 */
    getPosition(posId: string | number): Promise<PlusApiResultPositionDetailVO>;
    /** 获取子岗位 */
    getChildPositions(posId: string | number): Promise<PlusApiResultListPositionVO>;
    /** 获取成员详情 */
    getMember(memberId: string | number): Promise<PlusApiResultMemberVO>;
    /** 获取组织列表 */
    getOrganizationList(params?: QueryParams): Promise<PlusApiResultPageOrganizationVO>;
    /** 获取部门详情 */
    getDepartment(deptId: string | number): Promise<PlusApiResultDepartmentDetailVO>;
    /** 获取子部门 */
    getChildDepartments(deptId: string | number): Promise<PlusApiResultListDepartmentVO>;
    /** 根据编码获取组织 */
    getOrganizationByCode(code: string | number): Promise<PlusApiResultOrganizationDetailVO>;
}
export declare function createOrganizationApi(client: HttpClient): OrganizationApi;
//# sourceMappingURL=organization.d.ts.map