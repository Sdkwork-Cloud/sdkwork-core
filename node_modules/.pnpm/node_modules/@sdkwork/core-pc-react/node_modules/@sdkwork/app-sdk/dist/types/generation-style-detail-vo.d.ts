import { AssetMediaResourceList } from './asset-media-resource-list';
import { ImageMediaResource } from './image-media-resource';
import { TagsContent } from './tags-content';
/** 生成风格详情响应 */
export interface GenerationStyleDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 风格ID */
    styleId?: string;
    /** 风格名称 */
    name?: string;
    /** 风格描述 */
    description?: string;
    /** 风格类型 */
    type?: string;
    /** 配置参数 */
    configParams?: Record<string, unknown>;
    /** 标签 */
    tags?: TagsContent;
    /** 封面图片 */
    coverImage?: ImageMediaResource;
    /** 资源列表 */
    assets?: AssetMediaResourceList;
    /** 预览图片 */
    previewImage?: ImageMediaResource;
    /** 是否公开 */
    isPublic?: boolean;
    /** 状态 */
    status?: string;
    /** 使用次数 */
    usageCount?: number;
}
//# sourceMappingURL=generation-style-detail-vo.d.ts.map