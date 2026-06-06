/** 推荐内容响应 */
export interface RecommendationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 推荐ID */
    id?: string;
    /** 推荐类型：model/tool/template/resource */
    type?: string;
    /** 推荐标题 */
    title?: string;
    /** 推荐描述 */
    description?: string;
    /** 推荐图标 */
    icon?: string;
    /** 推荐图片 */
    image?: string;
    /** 推荐链接 */
    url?: string;
    /** 推荐评分 */
    rating?: number;
    /** 推荐热度 */
    hotScore?: number;
    /** 推荐理由 */
    reason?: string;
    /** 适用场景 */
    scenarios?: string[];
    /** 相关标签 */
    tags?: string[];
    /** 是否免费 */
    isFree?: boolean;
    /** 价格 */
    price?: string;
    /** 优先级 */
    priority?: number;
}
//# sourceMappingURL=recommendation-vo.d.ts.map