import { AdvertVO } from './advert-vo';
/** 广告位详情VO */
export interface AdvertPositionDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 广告位ID */
    positionId?: string;
    /** 广告位名称 */
    positionName?: string;
    /** 广告位类型 */
    positionType?: string;
    /** 描述 */
    description?: string;
    /** 优先级 */
    priority?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 广告列表 */
    adverts?: AdvertVO[];
}
//# sourceMappingURL=advert-position-detail-vo.d.ts.map