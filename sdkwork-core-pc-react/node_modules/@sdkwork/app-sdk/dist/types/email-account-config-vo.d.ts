/** Email account config view */
export interface EmailAccountConfigVO {
    /** 创建时间 */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** Mailbox address */
    address?: string;
    /** Display name */
    displayName?: string;
    /** Username */
    username?: string;
    /** Masked password */
    passwordMasked?: string;
    /** Password configured */
    passwordConfigured?: boolean;
    /** SMTP host */
    smtpHost?: string;
    /** SMTP port */
    smtpPort?: number;
    /** IMAP host */
    imapHost?: string;
    /** IMAP port */
    imapPort?: number;
    /** SSL enabled */
    sslEnabled?: boolean;
    /** Config enabled */
    enabled?: boolean;
}
//# sourceMappingURL=email-account-config-vo.d.ts.map