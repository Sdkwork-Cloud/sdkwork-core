import { DashboardCommerceCustomRangeVO } from './dashboard-commerce-custom-range-vo';
import { DashboardCommerceProductBreakdownVO } from './dashboard-commerce-product-breakdown-vo';
import { DashboardCommerceRevenueTrendPointVO } from './dashboard-commerce-revenue-trend-point-vo';
/** Dashboard commerce revenue analytics. */
export interface DashboardCommerceRevenueAnalyticsVO {
    granularity?: string;
    rangeMode?: string;
    selectedMonthKey?: string;
    customRange?: DashboardCommerceCustomRangeVO;
    totalRevenue?: string;
    dailyRevenue?: string;
    projectedMonthlyRevenue?: string;
    totalOrders?: number;
    averageOrderValue?: string;
    peakRevenueLabel?: string;
    peakRevenueValue?: string;
    deltaPercentage?: number;
    revenueTrend?: DashboardCommerceRevenueTrendPointVO[];
    productBreakdown?: DashboardCommerceProductBreakdownVO[];
}
//# sourceMappingURL=dashboard-commerce-revenue-analytics-vo.d.ts.map