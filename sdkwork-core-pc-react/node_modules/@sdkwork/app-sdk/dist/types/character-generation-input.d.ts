import { AssetMediaResource } from './asset-media-resource';
import { VideoStoryboard } from './video-storyboard';
/** 虚拟角色生成输入参数 */
export interface CharacterGenerationInput {
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
    /** 角色名称 */
    name?: string;
    /** 角色描述 */
    description?: string;
    /** 角色外观描述 */
    appearance?: string;
    /** 角色性格特点 */
    personality?: string;
    /** 角色背景故事 */
    background?: string;
    /** 角色类型 */
    type?: 'HUMAN' | 'PET' | 'ANIMAL' | 'ROBOT' | 'OTHER';
    /** 角色风格(anime/realistic/cartoon/3d等) */
    style?: string;
    /** 姿势 */
    pose?: string;
    /** 表情 */
    expression?: string;
    /** 性别 */
    gender?: string;
    /** 年龄段 */
    age?: string;
    /** 服装 */
    clothing?: string;
    /** 图片宽度(像素) */
    width?: number;
    /** 图片高度(像素) */
    height?: number;
    /** 是否高清 */
    hd?: boolean;
    /** 是否生成多视角 */
    multiView?: boolean;
    referenceAssetCount?: number;
}
//# sourceMappingURL=character-generation-input.d.ts.map