import { VipPackVO } from './vip-pack-vo';
/** VIP套餐分组响应 */
export interface VipPackGroupVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 分组ID */
    id?: number;
    /** 分组名称 */
    name?: string;
    /** 分组描述 */
    description?: string;
    /** 排序权重 */
    sortWeight?: number;
    /** 套餐列表 */
    packs?: VipPackVO[];
}
//# sourceMappingURL=vip-pack-group-vo.d.ts.map