import { SkillVO } from './skill-vo';
/** 技能分包信息 */
export interface SkillPackageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 分包ID */
    packageId?: number;
    /** 分包标识 */
    packageKey?: string;
    /** 分包名称 */
    name?: string;
    /** 分包简介 */
    summary?: string;
    /** 分包描述 */
    description?: string;
    /** 分包图标 */
    icon?: string;
    /** 封面图 */
    coverImage?: string;
    /** 分类ID */
    categoryId?: number;
    /** 分类名称 */
    categoryName?: string;
    /** 标签 */
    tags?: string[];
    /** 是否推荐 */
    featured?: boolean;
    /** 排序权重 */
    sortWeight?: number;
    /** 包含技能数量 */
    skillCount?: number;
    /** Package author name */
    authorName?: string;
    /** Package install count */
    installCount?: number;
    /** Package average rating */
    ratingAvg?: number;
    /** Package rating count */
    ratingCount?: number;
    /** Skills included in the package */
    skills?: SkillVO[];
    /** Package latest published time */
    latestPublishedAt?: string;
}
//# sourceMappingURL=skill-package-vo.d.ts.map