import { PathStepVO } from './path-step-vo';
/** 路径分析VO */
export interface PathAnalysisVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 起始页面 */
    startPage?: string;
    /** 结束页面 */
    endPage?: string;
    /** 步骤列表 */
    steps?: PathStepVO[];
    /** 总用户数 */
    totalUsers?: number;
    /** 平均步骤数 */
    averageSteps?: number;
    /** 转化率 */
    conversionRate?: number;
}
//# sourceMappingURL=path-analysis-vo.d.ts.map