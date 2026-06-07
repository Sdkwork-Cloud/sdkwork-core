/** Email send result view */
export interface EmailSendResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Generated sent message id */
    messageId?: number;
    /** Request recipient count */
    requestedRecipients?: number;
    /** Success recipient count */
    successCount?: number;
    /** Failure recipient count */
    failureCount?: number;
    /** Failed recipient list */
    failedRecipients?: string[];
    /** Whether all recipients succeeded */
    success?: boolean;
    /** Result message */
    message?: string;
}
//# sourceMappingURL=email-send-result-vo.d.ts.map