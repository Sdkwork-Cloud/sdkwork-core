/** Email message view */
export interface EmailMessageVO {
    /** Created time */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** Message id */
    id?: number;
    /** Folder: INBOX/SENT */
    folder?: string;
    /** Direction: INBOUND/OUTBOUND */
    direction?: string;
    /** From */
    from?: string;
    /** To recipients */
    to?: string[];
    /** Cc recipients */
    cc?: string[];
    /** Bcc recipients */
    bcc?: string[];
    /** Subject */
    subject?: string;
    /** Text preview */
    preview?: string;
    /** Content type */
    contentType?: string;
    /** Content */
    content?: string;
    /** Read flag */
    read?: boolean;
    /** Sent time */
    sentAt?: string;
    /** Received time */
    receivedAt?: string;
}
//# sourceMappingURL=email-message-vo.d.ts.map