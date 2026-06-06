import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 音频生成输入参数(语音合成TTS) */
export interface AudioGenerationInput {
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
    /** 语音标识 */
    voice?: string;
    /** 说话人ID */
    voiceSpeakerId?: number;
    /** 语言代码 */
    language?: string;
    /** 语速(0.25-4.0) */
    speed?: number;
    /** 音调(0.5-2.0) */
    pitch?: number;
    /** 音量(0-100) */
    volume?: number;
    /** 采样率 */
    sampleRate?: number;
    /** 比特率 */
    bitRate?: number;
    /** 声道数 */
    channels?: number;
    /** 情感类型(neutral/happy/sad/angry等) */
    emotion?: string;
    referenceAssetCount?: number;
}
//# sourceMappingURL=audio-generation-input.d.ts.map