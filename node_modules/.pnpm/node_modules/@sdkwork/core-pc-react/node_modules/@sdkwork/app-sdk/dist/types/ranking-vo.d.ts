import { RankInfoVO } from './rank-info-vo';
/** 排行榜 */
export interface RankingVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 排行榜类型 */
    rankingType?: string;
    /** 周期 */
    period?: string;
    /** 排名列表 */
    rankings?: RankInfoVO[];
    /** 我的排名 */
    myRank?: RankInfoVO;
    /** 总用户数 */
    totalUsers?: number;
}
//# sourceMappingURL=ranking-vo.d.ts.map