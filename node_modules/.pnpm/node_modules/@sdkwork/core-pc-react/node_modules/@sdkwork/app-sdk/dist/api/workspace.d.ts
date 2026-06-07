import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { MemberInviteForm, MemberRoleUpdateForm, PlusApiResultListMemberVO, PlusApiResultListWorkspaceVO, PlusApiResultPageProjectVO, PlusApiResultProjectDetailVO, PlusApiResultProjectVO, PlusApiResultVoid, PlusApiResultWorkspaceVO, ProjectCopyForm, ProjectCreateForm, ProjectMoveForm, ProjectUpdateForm, WorkspaceCreateForm, WorkspaceUpdateForm } from '../types';
export declare class WorkspaceApi {
    private client;
    constructor(client: HttpClient);
    /** 获取工作空间详情 */
    getWorkspaceDetail(workspaceId: string | number): Promise<PlusApiResultWorkspaceVO>;
    /** 更新工作空间 */
    updateWorkspace(workspaceId: string | number, body: WorkspaceUpdateForm): Promise<PlusApiResultWorkspaceVO>;
    /** 删除工作空间 */
    deleteWorkspace(workspaceId: string | number): Promise<PlusApiResultVoid>;
    /** 获取项目详情 */
    getProjectDetail(workspaceId: string | number, projectId: string | number): Promise<PlusApiResultProjectDetailVO>;
    /** 更新项目 */
    updateProject(workspaceId: string | number, projectId: string | number, body: ProjectUpdateForm): Promise<PlusApiResultProjectVO>;
    /** 删除项目 */
    deleteProject(workspaceId: string | number, projectId: string | number): Promise<PlusApiResultVoid>;
    /** 取消归档项目 */
    unarchiveProject(workspaceId: string | number, projectId: string | number): Promise<PlusApiResultVoid>;
    /** 移动项目 */
    moveProject(workspaceId: string | number, projectId: string | number, body: ProjectMoveForm): Promise<PlusApiResultVoid>;
    /** 归档项目 */
    archiveProject(workspaceId: string | number, projectId: string | number): Promise<PlusApiResultVoid>;
    /** 更新成员角色 */
    updateMemberRole(workspaceId: string | number, userId: string | number, body: MemberRoleUpdateForm): Promise<PlusApiResultVoid>;
    /** 获取工作空间列表 */
    listWorkspaces(): Promise<PlusApiResultListWorkspaceVO>;
    /** 创建工作空间 */
    createWorkspace(body: WorkspaceCreateForm): Promise<PlusApiResultWorkspaceVO>;
    /** 获取项目列表 */
    listProjects(workspaceId: string | number, params?: QueryParams): Promise<PlusApiResultPageProjectVO>;
    /** 创建项目 */
    createProject(workspaceId: string | number, body: ProjectCreateForm): Promise<PlusApiResultProjectVO>;
    /** 复制项目 */
    copyProject(workspaceId: string | number, projectId: string | number, body: ProjectCopyForm): Promise<PlusApiResultProjectVO>;
    /** 获取工作空间成员 */
    listWorkspaceMembers(workspaceId: string | number): Promise<PlusApiResultListMemberVO>;
    /** 邀请成员 */
    inviteMember(workspaceId: string | number, body: MemberInviteForm): Promise<PlusApiResultVoid>;
    /** 获取当前工作空间 */
    getCurrent(): Promise<PlusApiResultWorkspaceVO>;
    /** 移除成员 */
    removeMember(workspaceId: string | number, userId: string | number): Promise<PlusApiResultVoid>;
}
export declare function createWorkspaceApi(client: HttpClient): WorkspaceApi;
//# sourceMappingURL=workspace.d.ts.map