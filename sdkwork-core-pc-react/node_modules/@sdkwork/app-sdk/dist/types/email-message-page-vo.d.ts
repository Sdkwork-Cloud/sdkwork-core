import { EmailMessageVO } from './email-message-vo';
/** Email message page view */
export interface EmailMessagePageVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Page number */
    pageNum?: number;
    /** Page size */
    pageSize?: number;
    /** Total count */
    total?: number;
    /** Total pages */
    totalPages?: number;
    /** Message list */
    items?: EmailMessageVO[];
}
//# sourceMappingURL=email-message-page-vo.d.ts.map