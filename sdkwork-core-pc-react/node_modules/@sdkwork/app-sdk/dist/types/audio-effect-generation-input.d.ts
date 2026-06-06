import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 音效生成输入参数 */
export interface AudioEffectGenerationInput {
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
    /** 音效描述 */
    description?: string;
    /** 音效类别(nature/urban/mechanical/human/ambient等) */
    category?: string;
    /** 音效时长(秒) */
    duration?: number;
    /** 采样率 */
    sampleRate?: number;
    /** 比特率 */
    bitRate?: number;
    /** 声道数 */
    channels?: number;
    /** 是否循环 */
    loop?: boolean;
    /** 淡入时长(秒) */
    fadeIn?: number;
    /** 淡出时长(秒) */
    fadeOut?: number;
    referenceAssetCount?: number;
}
//# sourceMappingURL=audio-effect-generation-input.d.ts.map