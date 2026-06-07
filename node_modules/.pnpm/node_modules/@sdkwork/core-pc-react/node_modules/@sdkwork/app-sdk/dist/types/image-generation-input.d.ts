import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 图片生成输入参数 */
export interface ImageGenerationInput {
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
    /** 图片宽度(像素) */
    width?: number;
    /** 图片高度(像素) */
    height?: number;
    /** 图片尺寸预设 */
    size?: string;
    /** 图片质量(standard/hd) */
    quality?: string;
    /** 图片风格(vivid/natural) */
    style?: string;
    /** CFG Scale */
    cfgScale?: number;
    /** 推理步数 */
    steps?: number;
    /** 采样器类型 */
    sampler?: string;
    /** 图生图强度(0.0-1.0) */
    strength?: number;
    /** 是否启用安全检查 */
    safetyChecker?: boolean;
    /** 宽高比(16:9/9:16/1:1等) */
    aspectRatio?: string;
    referenceAssetCount?: number;
}
//# sourceMappingURL=image-generation-input.d.ts.map