/** 渠道分析VO */
export interface ChannelAnalysisVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 渠道ID */
    channelId?: string;
    /** 渠道名称 */
    channelName?: string;
    /** 渠道类型 */
    channelType?: string;
    /** 点击次数 */
    clickCount?: number;
    /** 安装次数 */
    installCount?: number;
    /** 活跃次数 */
    activeCount?: number;
    /** 转化率 */
    conversionRate?: number;
    /** 每次安装成本 */
    costPerInstall?: number;
    /** 投资回报率 */
    roi?: number;
}
//# sourceMappingURL=channel-analysis-vo.d.ts.map