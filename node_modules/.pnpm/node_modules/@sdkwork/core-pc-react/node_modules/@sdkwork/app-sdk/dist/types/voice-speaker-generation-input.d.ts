import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 语音说话人生成输入参数 */
export interface VoiceSpeakerGenerationInput {
    /** 任务标题 */
    title?: string;
    /** 主提示词 */
    prompt?: string;
    /** 反向提示词 */
    negativePrompt?: string;
    /** 参考资源列表(支持图片/视频/音频等任意类型) */
    referenceAssets?: AssetMediaResource[];
    /** 视频故事板 */
    storyboard?: VideoStoryboard;
    /** 生成参数 */
    parameters?: Record<string, unknown>;
    /** 生成数量 */
    n?: number;
    /** 随机种子 */
    seed?: number;
    /** 输出格式 */
    format?: string;
    /** 待转换文本 */
    text?: string;
    /** 说话人名称 */
    speakerName?: string;
    /** 说话人ID(已有说话人) */
    speakerId?: string;
    /** 语言代码 */
    language?: string;
    /** 语速(0.25-4.0) */
    speed?: number;
    /** 音调(0.5-2.0) */
    pitch?: number;
    /** 音量(0-100) */
    volume?: number;
    /** 情感类型(neutral/happy/sad/angry等) */
    emotion?: string;
    /** 是否保存说话人 */
    saveSpeaker?: boolean;
    voiceClone?: boolean;
    usingExistingSpeaker?: boolean;
    referenceAssetCount?: number;
}
//# sourceMappingURL=voice-speaker-generation-input.d.ts.map