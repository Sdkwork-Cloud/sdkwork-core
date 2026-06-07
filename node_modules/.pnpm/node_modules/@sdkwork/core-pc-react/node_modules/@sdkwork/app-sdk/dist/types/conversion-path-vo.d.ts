/** 转化路径VO */
export interface ConversionPathVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 路径ID */
    pathId?: string;
    /** 步骤列表 */
    steps?: string[];
    /** 转化次数 */
    conversionCount?: number;
    /** 转化率 */
    conversionRate?: number;
    /** 平均时间 */
    averageTime?: number;
    /** 起始页面 */
    startPage?: string;
    /** 结束页面 */
    endPage?: string;
}
//# sourceMappingURL=conversion-path-vo.d.ts.map