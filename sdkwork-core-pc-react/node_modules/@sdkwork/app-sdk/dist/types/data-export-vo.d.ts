/** 数据导出响应 */
export interface DataExportVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 导出任务ID */
    taskId?: string;
    /** 导出状态：pending/processing/completed/failed */
    status?: string;
    /** 下载链接 */
    downloadUrl?: string;
    /** 文件大小 */
    fileSize?: string;
    /** 预计完成时间 */
    estimatedCompletionTime?: string;
    /** 导出进度 */
    progress?: number;
    /** 错误信息 */
    errorMessage?: string;
}
//# sourceMappingURL=data-export-vo.d.ts.map