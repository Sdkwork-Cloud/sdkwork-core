/** 导出响应 */
export interface ExportVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 导出任务ID */
    taskId?: string;
    /** 导出文件URL */
    fileUrl?: string;
    /** 导出文件名称 */
    fileName?: string;
    /** 导出文件大小 */
    fileSize?: number;
    /** 导出状态：pending/processing/completed/failed */
    status?: string;
    /** 导出格式：json/csv/pdf */
    format?: string;
    /** 导出数量 */
    exportCount?: number;
    /** 过期时间 */
    expireTime?: string;
}
//# sourceMappingURL=export-vo.d.ts.map