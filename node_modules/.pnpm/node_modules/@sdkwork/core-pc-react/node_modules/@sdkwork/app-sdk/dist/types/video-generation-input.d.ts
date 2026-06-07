import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 视频生成输入参数 */
export interface VideoGenerationInput {
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
    /** 视频宽度(像素) */
    width?: number;
    /** 视频高度(像素) */
    height?: number;
    /** 视频时长(秒) */
    duration?: number;
    /** 帧率(FPS) */
    fps?: number;
    /** 视频风格(cinematic/anime/realistic等) */
    style?: string;
    /** 宽高比(16:9/9:16/1:1等) */
    aspectRatio?: string;
    /** 运动强度(1-255) */
    motionStrength?: number;
    /** 摄像机运动类型(zoom_in/zoom_out/pan_left/pan_right等) */
    cameraMotion?: string;
    /** 是否循环视频 */
    loop?: boolean;
    /** 是否高清 */
    hd?: boolean;
    /** 是否生成字幕 */
    subtitle?: boolean;
    textToVideo?: boolean;
    referenceAssetCount?: number;
}
//# sourceMappingURL=video-generation-input.d.ts.map