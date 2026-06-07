import { AspectRatio } from './aspect-ratio';
/** 模型附加技术特性信息（包含多模态支持、生成能力等） */
export interface ModelMetadata {
    /** 支持的视频持续时间范围（单位：秒） */
    durations?: number[];
    /** 支持的分辨率配置（可选值：480p/720p/1080p/4K） */
    resolutions?: string[];
    /** 支持的宽高比配置（21:9/16:9/4:3/1:1/keep_ratio/adaptive等） */
    ratios?: AspectRatio[];
    /** 是否为多模态模型（支持文字、图片、语音、视频输入输出） */
    is_multimodal?: boolean;
    /** 是否为思考模型（支持思维链处理能力） */
    is_reasoning?: boolean;
    /** 是否支持工具调用（Function Call功能） */
    is_tool_call?: boolean;
}
//# sourceMappingURL=model-metadata.d.ts.map