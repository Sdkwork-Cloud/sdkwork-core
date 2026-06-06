import { FeedbackFollowUpVO } from './feedback-follow-up-vo';
/** 反馈详情信息 */
export interface FeedbackDetailVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 反馈ID */
    id?: string;
    /** 反馈类型 */
    type?: string;
    /** 反馈内容 */
    content?: string;
    /** 联系方式 */
    contact?: string;
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
    /** 跟进记录 */
    followUps?: FeedbackFollowUpVO[];
}
//# sourceMappingURL=feedback-detail-vo.d.ts.map