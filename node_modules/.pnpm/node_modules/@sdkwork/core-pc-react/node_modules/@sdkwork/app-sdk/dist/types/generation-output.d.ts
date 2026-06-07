import { AssetMediaResource } from './asset-media-resource';
/** AI生成任务输出结果 */
export interface GenerationOutput {
    /** 生成结果资源列表 */
    resources?: AssetMediaResource[];
    /** 主结果URL(兼容旧接口) */
    primaryUrl?: string;
    /** 结果URL列表(兼容旧接口) */
    urls?: string[];
    /** 生成耗时(毫秒) */
    durationMs?: number;
    /** 消耗Token数 */
    tokenUsage?: number;
    /** 消耗费用 */
    cost?: number;
    /** 模型版本 */
    modelVersion?: string;
    /** 生成种子 */
    seed?: number;
    /** 扩展元数据 */
    metadata?: Record<string, unknown>;
    /** 创建时间 */
    createdAt?: string;
    resourceCount?: number;
    primaryResource?: AssetMediaResource;
}
//# sourceMappingURL=generation-output.d.ts.map