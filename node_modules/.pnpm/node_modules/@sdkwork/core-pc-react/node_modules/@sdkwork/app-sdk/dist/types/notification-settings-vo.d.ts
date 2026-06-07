import { NotificationTypeSettingsVO } from './notification-type-settings-vo';
/** Notification settings. */
export interface NotificationSettingsVO {
    /** 系统通知 */
    system?: boolean;
    /** 消息通知 */
    message?: boolean;
    /** 活动通知 */
    activity?: boolean;
    /** 优惠通知 */
    promotion?: boolean;
    /** 声音 */
    sound?: boolean;
    /** 振动 */
    vibration?: boolean;
    /** Whether push notifications are enabled. */
    enablePush?: boolean;
    /** Whether email notifications are enabled. */
    enableEmail?: boolean;
    /** Whether SMS notifications are enabled. */
    enableSms?: boolean;
    /** Whether in-app notifications are enabled. */
    enableInApp?: boolean;
    /** Quiet hours start time. */
    quietHoursStart?: string;
    /** Quiet hours end time. */
    quietHoursEnd?: string;
    /** Notification sound identifier. */
    notificationSound?: string;
    /** Whether vibration is enabled. */
    vibrationEnabled?: boolean;
    /** Notification settings by notification type. */
    typeSettings?: Record<string, NotificationTypeSettingsVO>;
    /** Last update time. */
    updateTime?: string;
}
//# sourceMappingURL=notification-settings-vo.d.ts.map