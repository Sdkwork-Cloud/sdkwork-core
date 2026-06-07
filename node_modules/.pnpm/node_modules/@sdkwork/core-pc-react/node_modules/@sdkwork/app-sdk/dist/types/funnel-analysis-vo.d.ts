import { FunnelStepVO } from './funnel-step-vo';
/** 漏斗分析VO */
export interface FunnelAnalysisVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 漏斗名称 */
    funnelName?: string;
    /** 步骤列表 */
    steps?: FunnelStepVO[];
    /** 总体转化率 */
    overallConversionRate?: number;
    /** 总用户数 */
    totalUsers?: number;
    /** 转化用户数 */
    convertedUsers?: number;
}
//# sourceMappingURL=funnel-analysis-vo.d.ts.map