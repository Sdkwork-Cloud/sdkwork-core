import { AudioMediaResource } from './audio-media-resource';
import { CharacterMediaResource } from './character-media-resource';
import { FileMediaResource } from './file-media-resource';
import { ImageMediaResource } from './image-media-resource';
import { MusicMediaResource } from './music-media-resource';
import { TagsContent } from './tags-content';
import { VideoMediaResource } from './video-media-resource';
/** 媒体资源包装类 */
export interface AssetMediaResource {
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
    /** 资源名称 */
    name?: string;
    /** 资源扩展名 */
    extension?: string;
    /** 资源标签 */
    tags?: TagsContent;
    /** 资源元数据 */
    metadata?: Record<string, unknown>;
    /** AI生成提示词 */
    prompt?: string;
    /** 图片资源 */
    image?: ImageMediaResource;
    /** 视频资源 */
    video?: VideoMediaResource;
    /** 音频资源 */
    audio?: AudioMediaResource;
    /** 音乐资源 */
    music?: MusicMediaResource;
    /** 数字人/角色资源 */
    character?: CharacterMediaResource;
    /** 文件资源 */
    file?: FileMediaResource;
    /** 扩展属性 */
    extraProps?: Record<string, unknown>;
}
//# sourceMappingURL=asset-media-resource.d.ts.map