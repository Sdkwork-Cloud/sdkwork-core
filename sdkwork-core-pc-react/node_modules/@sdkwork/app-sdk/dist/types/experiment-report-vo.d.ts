/** 实验报告响应 */
export interface ExperimentReportVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 实验标识 */
    experimentKey?: string;
    /** 报告类型 */
    reportType?: string;
    /** 报告数据 */
    reportData?: Record<string, unknown>;
    /** 报告生成时间 */
    generatedAt?: string;
    /** 报告版本 */
    version?: string;
}
//# sourceMappingURL=experiment-report-vo.d.ts.map