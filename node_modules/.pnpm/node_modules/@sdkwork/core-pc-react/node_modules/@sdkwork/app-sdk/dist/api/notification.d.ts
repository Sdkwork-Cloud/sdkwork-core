import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DeviceControlForm, DeviceMessageSendForm, DeviceRegisterForm, DeviceStatusUpdateForm, NotificationBatchReadForm, NotificationSettingsUpdateForm, NotificationTypeSettingsForm, PlusApiResultBoolean, PlusApiResultDeviceMessageVO, PlusApiResultDeviceVO, PlusApiResultListDeviceMessageVO, PlusApiResultListDeviceVO, PlusApiResultListNotificationTypeVO, PlusApiResultListString, PlusApiResultMapStringInteger, PlusApiResultNotificationDetailVO, PlusApiResultNotificationSettingsVO, PlusApiResultNotificationVO, PlusApiResultPageNotificationVO, PlusApiResultVoid, TestNotificationForm, TopicSubscribeForm } from '../types';
export declare class NotificationApi {
    private client;
    constructor(client: HttpClient);
    /** Mark notification as unread */
    markAsUnread(notificationId: string | number): Promise<PlusApiResultNotificationVO>;
    /** Mark notification as read */
    markAsRead(notificationId: string | number): Promise<PlusApiResultNotificationVO>;
    /** Get notification settings */
    getNotificationSettings(): Promise<PlusApiResultNotificationSettingsVO>;
    /** Update notification settings */
    updateNotificationSettings(body: NotificationSettingsUpdateForm): Promise<PlusApiResultNotificationSettingsVO>;
    /** Update type settings */
    updateTypeSettings(type: string | number, body: NotificationTypeSettingsForm): Promise<PlusApiResultVoid>;
    /** Mark all notifications as read */
    markAllAsRead(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** Update device status */
    updateDeviceStatus(deviceId: string | number, body: DeviceStatusUpdateForm): Promise<PlusApiResultDeviceVO>;
    /** Batch mark notifications as read */
    batchMarkAsRead(body: NotificationBatchReadForm): Promise<PlusApiResultVoid>;
    /** Send test notification */
    sendTest(body: TestNotificationForm): Promise<PlusApiResultVoid>;
    /** List subscriptions */
    listSubscriptions(): Promise<PlusApiResultListString>;
    /** Subscribe topic */
    subscribeTopic(body: TopicSubscribeForm): Promise<PlusApiResultVoid>;
    /** List devices */
    listDevices(): Promise<PlusApiResultListDeviceVO>;
    /** Register device */
    registerDevice(body: DeviceRegisterForm): Promise<PlusApiResultDeviceVO>;
    /** List device messages */
    listDeviceMessages(deviceId: string | number, params?: QueryParams): Promise<PlusApiResultListDeviceMessageVO>;
    /** Send device message */
    sendDeviceMessage(deviceId: string | number, body: DeviceMessageSendForm): Promise<PlusApiResultDeviceMessageVO>;
    /** Control device */
    controlDevice(deviceId: string | number, body: DeviceControlForm): Promise<PlusApiResultBoolean>;
    /** List notifications */
    listNotifications(params?: QueryParams): Promise<PlusApiResultPageNotificationVO>;
    /** Get notification detail */
    getNotificationDetail(notificationId: string | number): Promise<PlusApiResultNotificationDetailVO>;
    /** Delete notification */
    deleteNotification(notificationId: string | number): Promise<PlusApiResultVoid>;
    /** Get unread notification count */
    getUnreadCount(): Promise<PlusApiResultMapStringInteger>;
    /** List notification types */
    listNotificationTypes(): Promise<PlusApiResultListNotificationTypeVO>;
    /** Unsubscribe topic */
    unsubscribeTopic(topic: string | number): Promise<PlusApiResultVoid>;
    /** Unregister device */
    unregisterDevice(deviceToken: string | number): Promise<PlusApiResultVoid>;
    /** Clear notifications */
    clearAllNotifications(params?: QueryParams): Promise<PlusApiResultVoid>;
    /** Batch delete notifications */
    batchDeleteNotifications(): Promise<PlusApiResultVoid>;
}
export declare function createNotificationApi(client: HttpClient): NotificationApi;
//# sourceMappingURL=notification.d.ts.map