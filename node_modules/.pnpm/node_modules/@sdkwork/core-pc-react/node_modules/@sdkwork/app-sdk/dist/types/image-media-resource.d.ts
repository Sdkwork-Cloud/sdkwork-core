import { TagsContent } from './tags-content';
/** 图片媒体资源 */
export interface ImageMediaResource {
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
    /** 图片宽度(像素) */
    width?: number;
    /** 图片高度(像素) */
    height?: number;
    /** 图片分割结果 */
    splitImages?: ImageMediaResource;
    /** 图片宽高比 */
    aspectRatio?: string;
}
//# sourceMappingURL=image-media-resource.d.ts.map