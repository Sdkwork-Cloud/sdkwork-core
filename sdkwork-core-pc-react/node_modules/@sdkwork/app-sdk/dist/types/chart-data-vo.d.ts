import { ChartConfigVO } from './chart-config-vo';
import { DatasetVO } from './dataset-vo';
/** 图表数据响应 */
export interface ChartDataVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 图表类型：line/bar/pie/doughnut */
    type?: string;
    /** 图表标题 */
    title?: string;
    /** X轴标签 */
    labels?: string[];
    /** 数据集 */
    datasets?: DatasetVO[];
    /** 图表配置 */
    config?: ChartConfigVO;
}
//# sourceMappingURL=chart-data-vo.d.ts.map