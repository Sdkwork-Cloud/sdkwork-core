import { ImageMediaResource } from './image-media-resource';
/** 角色响应 */
export interface CharacterVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 角色ID */
    characterId?: string;
    /** 角色名称 */
    name?: string;
    /** 角色类型 */
    type?: string;
    /** 角色描述 */
    description?: string;
    /** 角色头像 */
    avatar?: ImageMediaResource;
    /** 角色状态 */
    status?: string;
    /** 关联智能体ID */
    agentId?: number;
    /** 是否公开 */
    isPublic?: boolean;
    /** 使用次数 */
    usageCount?: number;
    /** 点赞数 */
    likeCount?: number;
}
//# sourceMappingURL=character-vo.d.ts.map