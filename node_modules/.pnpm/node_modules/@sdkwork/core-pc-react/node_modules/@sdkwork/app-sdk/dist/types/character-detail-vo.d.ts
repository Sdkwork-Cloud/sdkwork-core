import { ImageMediaResource } from './image-media-resource';
import { VideoMediaResource } from './video-media-resource';
/** 角色详情响应 */
export interface CharacterDetailVO {
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
    /** 角色三视图 */
    threeViewImage?: ImageMediaResource;
    /** 角色GRID分镜图 */
    gridShotsImage?: ImageMediaResource;
    /** 角色头像视频 */
    avatarVideo?: VideoMediaResource;
    /** 角色状态 */
    status?: string;
    /** 关联智能体ID */
    agentId?: number;
    /** 角色个性特征 */
    personality?: string;
    /** 角色背景故事 */
    background?: string;
    /** 交互设置 */
    interactionSettings?: string;
    /** 角色版本 */
    version?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 使用次数 */
    usageCount?: number;
    /** 点赞数 */
    likeCount?: number;
    /** 最后使用时间 */
    lastUsedAt?: string;
}
//# sourceMappingURL=character-detail-vo.d.ts.map