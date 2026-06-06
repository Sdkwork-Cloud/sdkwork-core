import { AchievementVO } from './achievement-vo';
/** 成就统计 */
export interface AchievementStatisticsVO {
    /** 总成就数 */
    totalAchievements?: number;
    /** 已解锁成就数 */
    unlockedAchievements?: number;
    /** 成就完成率 */
    completionRate?: number;
    /** 总积分 */
    totalPoints?: number;
    /** 最近解锁的成就 */
    recentAchievements?: AchievementVO[];
}
//# sourceMappingURL=achievement-statistics-vo.d.ts.map