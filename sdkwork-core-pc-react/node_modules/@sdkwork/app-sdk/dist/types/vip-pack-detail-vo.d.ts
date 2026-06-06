import { VipBenefitVO } from './vip-benefit-vo';
/** VIP套餐详情响应 */
export interface VipPackDetailVO {
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
    /** 关联等级ID */
    levelId?: number;
    /** 关联等级名称 */
    levelName?: string;
    /** 分组ID */
    groupId?: number;
    /** 分组名称 */
    groupName?: string;
    /** 有效期开始 */
    validFrom?: string;
    /** 有效期结束 */
    validTo?: string;
    /** 排序权重 */
    sortWeight?: number;
    /** 包含权益 */
    benefits?: VipBenefitVO[];
}
//# sourceMappingURL=vip-pack-detail-vo.d.ts.map