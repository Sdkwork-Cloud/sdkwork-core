import { TagsContent } from './tags-content';
/** 数字人媒体资源 */
export interface CharacterMediaResource {
    /** 资源ID */
    id?: number;
    /** 资源UUID */
    uuid?: string;
    /** 资源URL */
    url?: string;
    /** 资源字节数据 */
    bytes?: string;
    /** 本地文件 */
    localFile?: unknown;
    /** 资源Base64编码 */
    base64?: string;
    /** 资源类型 */
    type?: 'IMAGE' | 'VIDEO' | 'AUDIO' | 'DOCUMENT' | 'FILE' | 'MUSIC' | 'CHARACTER' | 'MODEL_3D' | 'PPT' | 'CODE';
    /** 资源MIME类型 */
    mimeType?: string;
    /** 资源大小(字节) */
    size?: number;
    /** 角色名称 */
    name?: string;
    /** 资源扩展名 */
    extension?: string;
    /** 资源标签 */
    tags?: TagsContent;
    /** 资源元数据 */
    metadata?: Record<string, unknown>;
    /** AI生成提示词 */
    prompt?: string;
    /** 角色类型 */
    characterType?: string;
    /** 性别 */
    gender?: string;
    /** 年龄段 */
    ageGroup?: string;
    /** 头像图片URL */
    avatarUrl?: string;
    /** 头像视频URL */
    avatarVideoUrl?: string;
    /** 关联发音人ID */
    speakerId?: number;
    /** 外观参数 */
    appearanceParams?: Record<string, unknown>;
    /** 动画参数 */
    animationParams?: Record<string, unknown>;
}
//# sourceMappingURL=character-media-resource.d.ts.map