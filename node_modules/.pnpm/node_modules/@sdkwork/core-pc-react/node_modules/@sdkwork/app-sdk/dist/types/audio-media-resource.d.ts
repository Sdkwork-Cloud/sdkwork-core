import { TagsContent } from './tags-content';
/** 音频媒体资源 */
export interface AudioMediaResource {
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
    /** 音频格式 */
    format?: 'wav' | 'mp3' | 'aac' | 'flac' | 'ogg' | 'pcm' | 'aiff' | 'au' | 'opus';
    /** 比特率 */
    bitRate?: number;
    /** 采样率 */
    sampleRate?: number;
    /** 声道数 */
    channels?: number;
    /** 音频时长(秒) */
    duration?: number;
}
//# sourceMappingURL=audio-media-resource.d.ts.map