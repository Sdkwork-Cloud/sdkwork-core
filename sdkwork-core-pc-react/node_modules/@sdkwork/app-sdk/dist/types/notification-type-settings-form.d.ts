/** Notification settings update request for a single notification type. */
export interface NotificationTypeSettingsForm {
    /** Notification type. */
    type: string;
    enabled?: boolean;
    pushMethod?: string;
    needReminder?: boolean;
    /** Whether push notifications are enabled for this type. */
    enablePush?: boolean;
    /** Whether in-app notifications are enabled for this type. */
    enableInApp?: boolean;
    /** Whether email notifications are enabled for this type. */
    enableEmail?: boolean;
    /** Whether SMS notifications are enabled for this type. */
    enableSms?: boolean;
}
//# sourceMappingURL=notification-type-settings-form.d.ts.map