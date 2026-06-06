import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultListProjectVO, PlusApiResultPageProjectVO, PlusApiResultProjectDetailVO, PlusApiResultProjectStatisticsVO, PlusApiResultProjectVO, PlusApiResultVoid, ProjectCopyRequest, ProjectCreateRequest, ProjectMoveRequest, ProjectUpdateRequest } from '../types';
export declare class ProjectApi {
    private client;
    constructor(client: HttpClient);
    /** 获取项目详情 */
    getProjectDetail(projectId: string | number): Promise<PlusApiResultProjectDetailVO>;
    /** 更新项目 */
    updateProject(projectId: string | number, body: ProjectUpdateRequest): Promise<PlusApiResultProjectVO>;
    /** 删除项目 */
    deleteProject(projectId: string | number): Promise<PlusApiResultVoid>;
    /** 取消归档项目 */
    unarchive(projectId: string | number): Promise<PlusApiResultVoid>;
    /** 移动项目 */
    move(projectId: string | number, body: ProjectMoveRequest): Promise<PlusApiResultVoid>;
    /** 归档项目 */
    archive(projectId: string | number): Promise<PlusApiResultVoid>;
    /** 获取项目列表 */
    listProjects(params?: QueryParams): Promise<PlusApiResultPageProjectVO>;
    /** 创建项目 */
    createProject(body: ProjectCreateRequest): Promise<PlusApiResultProjectVO>;
    /** 复制项目 */
    copy(projectId: string | number, body: ProjectCopyRequest): Promise<PlusApiResultProjectVO>;
    /** 项目统计 */
    getProjectStatistics(projectId: string | number): Promise<PlusApiResultProjectStatisticsVO>;
    /** 搜索项目 */
    searchProjects(params?: QueryParams): Promise<PlusApiResultPageProjectVO>;
    /** 最近访问项目 */
    listRecentProjects(params?: QueryParams): Promise<PlusApiResultListProjectVO>;
}
export declare function createProjectApi(client: HttpClient): ProjectApi;
//# sourceMappingURL=project.d.ts.map