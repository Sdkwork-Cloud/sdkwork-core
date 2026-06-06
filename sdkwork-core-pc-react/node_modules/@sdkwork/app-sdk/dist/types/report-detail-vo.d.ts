/** 举报详情信息 */
export interface ReportDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 举报ID */
    id?: string;
    /** 举报类型 */
    type?: string;
    /** 举报对象ID */
    targetId?: string;
    /** 举报内容 */
    content?: string;
    /** 附件URL */
    attachmentUrl?: string;
    /** 相关截图 */
    screenshotUrl?: string;
    /** 状态 */
    status?: string;
    /** 提交时间 */
    submitTime?: string;
    /** 处理时间 */
    processTime?: string;
    /** 处理结果 */
    processResult?: string;
}
//# sourceMappingURL=report-detail-vo.d.ts.map