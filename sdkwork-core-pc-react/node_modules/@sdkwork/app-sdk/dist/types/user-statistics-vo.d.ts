import { AchievementStatisticsVO } from './achievement-statistics-vo';
import { GenerationStatisticsVO } from './generation-statistics-vo';
import { UsageStatisticsVO } from './usage-statistics-vo';
import { UserLevelVO } from './user-level-vo';
import { VipStatisticsVO } from './vip-statistics-vo';
/** 用户统计响应 */
export interface UserStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户ID */
    userId?: string;
    /** 用户名称 */
    username?: string;
    /** 用户头像 */
    avatar?: string;
    /** 注册时间 */
    registeredAt?: string;
    /** 最后登录时间 */
    lastLoginAt?: string;
    /** 总登录次数 */
    loginCount?: number;
    /** 总使用时长（分钟） */
    totalUsageTime?: number;
    /** 总生成次数 */
    totalGenerations?: number;
    /** 总项目数 */
    totalProjects?: number;
    /** 总文件数 */
    totalFiles?: number;
    /** 总存储空间（字节） */
    totalStorage?: number;
    /** 用户等级 */
    level?: UserLevelVO;
    /** VIP信息 */
    vipInfo?: VipStatisticsVO;
    /** 成就统计 */
    achievementStats?: AchievementStatisticsVO;
    /** 使用统计 */
    usageStats?: UsageStatisticsVO;
    /** 生成统计 */
    generationStats?: GenerationStatisticsVO;
}
//# sourceMappingURL=user-statistics-vo.d.ts.map