import { TagsContent } from './tags-content';
/** AI提示语响应 */
export interface PromptVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 提示语ID */
    id?: number;
    /** 提示语标题 */
    title?: string;
    /** 提示语内容 */
    content?: string;
    /** 提示语类型 */
    type?: 'DEFAULT' | 'SYSTEM' | 'ASSISTANT' | 'USER';
    /** 业务类型 */
    bizType?: 'DEFAULT' | 'TEXT' | 'IMAGE' | 'VIDEO' | 'AUDIO' | 'MUSIC' | 'AGENT' | 'VOICE_CLONE_WORDS';
    /** 提示语描述 */
    description?: string;
    /** 分类ID */
    cateId?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 排序 */
    sort?: number;
    /** 参数定义 */
    parameters?: Record<string, unknown>;
    /** 创建者 */
    creator?: string;
    /** 适用模型 */
    model?: string;
    /** 标签 */
    tags?: TagsContent;
    /** 使用次数 */
    usageCount?: number;
    /** 平均响应时间(毫秒) */
    avgResponseTime?: number;
    /** 版本号 */
    version?: string;
    /** 是否公开 */
    isPublic?: boolean;
    /** 是否收藏 */
    isFavorite?: boolean;
    /** 收藏次数 */
    favoriteCount?: number;
    /** 最后使用时间 */
    lastUsedAt?: string;
}
//# sourceMappingURL=prompt-vo.d.ts.map