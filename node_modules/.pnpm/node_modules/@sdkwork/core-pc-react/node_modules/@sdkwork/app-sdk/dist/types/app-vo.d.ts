import { AppInstallSkill } from './app-install-skill';
import { ImageMediaResource } from './image-media-resource';
/** 应用响应 */
export interface AppVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 应用ID */
    appId?: string;
    /** 应用名称 */
    name?: string;
    /** 应用描述 */
    description?: string;
    /** 应用图标 */
    icon?: ImageMediaResource;
    /** 图标URL */
    iconUrl?: string;
    /** 访问URL */
    accessUrl?: string;
    /** 版本 */
    version?: string;
    /** 应用类型 */
    appType?: string;
    /** 状态 */
    status?: string;
    /** 项目ID */
    projectId?: number;
    /** 安装技能 */
    installSkill?: AppInstallSkill;
    /** Developer display name. */
    developer?: string;
    /** Store category. */
    category?: string;
    id?: string;
}
//# sourceMappingURL=app-vo.d.ts.map