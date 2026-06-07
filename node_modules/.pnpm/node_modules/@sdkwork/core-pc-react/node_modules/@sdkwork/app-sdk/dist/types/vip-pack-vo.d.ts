/** VIP套餐响应 */
export interface VipPackVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 套餐ID */
    id?: number;
    /** 套餐名称 */
    name?: string;
    /** 套餐描述 */
    description?: string;
    /** 套餐价格 */
    price?: number;
    /** 原价 */
    originalPrice?: number;
    /** 赠送灵点数量 */
    pointAmount?: number;
    /** VIP时长(天) */
    vipDurationDays?: number;
    /** 关联等级名称 */
    levelName?: string;
    /** 排序权重 */
    sortWeight?: number;
    /** 是否推荐 */
    recommended?: boolean;
    /** 标签 */
    tags?: string[];
}
//# sourceMappingURL=vip-pack-vo.d.ts.map