import { VoiceSourceVO } from './voice-source-vo';
/** 发音人详情响应 */
export interface VoiceSpeakerDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 发音人名称 */
    name?: string;
    /** 本地化名称 */
    localName?: string;
    /** 发音人代码 */
    code?: string;
    /** 头像图片URL */
    faceImageUrl?: string;
    /** 头像视频URL */
    faceVideoUrl?: string;
    /** 资源列表 */
    resourceUrls?: string[];
    /** 渠道 */
    channel?: string;
    /** 渠道名称 */
    channelName?: string;
    /** 产品名称 */
    product?: string;
    /** 性别 */
    gender?: string;
    /** 性别名称 */
    genderName?: string;
    /** 年龄类型 */
    ageType?: string;
    /** 年龄类型名称 */
    ageTypeName?: string;
    /** 发音人类型 */
    type?: string;
    /** 发音人类型名称 */
    typeName?: string;
    /** 支持的模型列表 */
    models?: string[];
    /** 渠道发音人ID */
    channelSpeakerId?: string;
    /** 版本 */
    version?: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 状态 */
    status?: string;
    /** 状态名称 */
    statusName?: string;
    /** 描述 */
    description?: string;
    /** 标签列表 */
    tags?: string[];
    /** 音源列表 */
    voiceSources?: VoiceSourceVO[];
    /** 示例音频 */
    sampleAudios?: string[];
    /** 扩展属性 */
    attributes?: Record<string, unknown>;
}
//# sourceMappingURL=voice-speaker-detail-vo.d.ts.map