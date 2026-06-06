/** Notification settings for a single notification type. */
export interface NotificationTypeSettingsVO {
    /** Notification type. */
    type?: string;
    /** Whether push notifications are enabled for this type. */
    enablePush?: boolean;
    /** Whether in-app notifications are enabled for this type. */
    enableInApp?: boolean;
    /** Whether email notifications are enabled for this type. */
    enableEmail?: boolean;
    /** Whether SMS notifications are enabled for this type. */
    enableSms?: boolean;
}
//# sourceMappingURL=notification-type-settings-vo.d.ts.map