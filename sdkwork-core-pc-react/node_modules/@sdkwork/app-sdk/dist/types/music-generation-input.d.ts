import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 音乐生成输入参数 */
export interface MusicGenerationInput {
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
    /** 歌词 */
    lyrics?: string;
    /** 音乐时长(秒) */
    duration?: number;
    /** 流派(pop/rock/jazz/classical/edm等) */
    genre?: string;
    /** 风格 */
    style?: string;
    /** 速度BPM */
    tempo?: number;
    /** 调式(C major/A minor等) */
    key?: string;
    /** 拍号(4/4/3/4等) */
    timeSignature?: string;
    /** 情绪(happy/sad/energetic/calm等) */
    mood?: string;
    /** 乐器 */
    instruments?: string;
    /** 是否纯音乐(无人声) */
    instrumental?: boolean;
    /** 是否高清 */
    hd?: boolean;
    referenceAssetCount?: number;
}
//# sourceMappingURL=music-generation-input.d.ts.map