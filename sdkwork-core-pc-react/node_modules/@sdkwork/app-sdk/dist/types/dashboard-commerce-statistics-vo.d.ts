import { DashboardCommerceBusinessSummaryVO } from './dashboard-commerce-business-summary-vo';
import { DashboardCommerceProductPerformanceVO } from './dashboard-commerce-product-performance-vo';
import { DashboardCommerceRevenueAnalyticsVO } from './dashboard-commerce-revenue-analytics-vo';
import { DashboardCommerceRevenueRecordVO } from './dashboard-commerce-revenue-record-vo';
/** Dashboard commerce statistics. */
export interface DashboardCommerceStatisticsVO {
    businessSummary?: DashboardCommerceBusinessSummaryVO;
    revenueAnalytics?: DashboardCommerceRevenueAnalyticsVO;
    recentRevenueRecords?: DashboardCommerceRevenueRecordVO[];
    productPerformance?: DashboardCommerceProductPerformanceVO[];
}
//# sourceMappingURL=dashboard-commerce-statistics-vo.d.ts.map