import { AchievementVO } from './achievement-vo';
import { ChartDataVO } from './chart-data-vo';
import { PopupNotificationVO } from './popup-notification-vo';
import { RecentActivityVO } from './recent-activity-vo';
import { RecentProjectVO } from './recent-project-vo';
import { RecommendationVO } from './recommendation-vo';
import { ShortcutVO } from './shortcut-vo';
import { StatisticsVO } from './statistics-vo';
import { TodoItemVO } from './todo-item-vo';
import { TrendingItemVO } from './trending-item-vo';
import { UserInfoVO } from './user-info-vo';
/** 首页仪表盘响应 */
export interface HomeDashboardVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户信息 */
    userInfo?: UserInfoVO;
    /** 统计信息 */
    statistics?: StatisticsVO;
    /** 快捷方式 */
    shortcuts?: ShortcutVO[];
    /** 最近活动 */
    recentActivities?: RecentActivityVO[];
    /** 最近项目 */
    recentProjects?: RecentProjectVO[];
    /** 待办事项 */
    todoItems?: TodoItemVO[];
    /** 推荐内容 */
    recommendations?: RecommendationVO[];
    /** 热门项目 */
    trendingItems?: TrendingItemVO[];
    /** 成就进度 */
    achievements?: AchievementVO[];
    /** 弹窗通知 */
    notifications?: PopupNotificationVO[];
    /** 图表数据 */
    chartData?: ChartDataVO[];
}
//# sourceMappingURL=home-dashboard-vo.d.ts.map