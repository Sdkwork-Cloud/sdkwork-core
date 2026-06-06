/** 热门项目响应 */
export interface TrendingItemVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 项目ID */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 项目描述 */
    description?: string;
    /** 项目图标 */
    icon?: string;
    /** 项目封面 */
    cover?: string;
    /** 项目类型 */
    type?: string;
    /** 项目链接 */
    url?: string;
    /** 项目热度 */
    hotScore?: number;
    /** 项目评分 */
    rating?: number;
    /** 项目下载量 */
    downloads?: number;
    /** 项目收藏量 */
    favorites?: number;
    /** 项目评论数 */
    comments?: number;
    /** 项目作者 */
    author?: string;
    /** 项目标签 */
    tags?: string[];
    /** 项目价格 */
    price?: string;
    /** 项目是否免费 */
    isFree?: boolean;
    /** 项目更新时间 */
    updateTime?: string;
}
//# sourceMappingURL=trending-item-vo.d.ts.map