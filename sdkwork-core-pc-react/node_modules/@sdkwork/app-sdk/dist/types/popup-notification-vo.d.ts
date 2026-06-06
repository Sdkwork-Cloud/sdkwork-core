import { NotificationButtonVO } from './notification-button-vo';
/** 弹窗通知响应 */
export interface PopupNotificationVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 通知ID */
    id?: string;
    /** 通知标题 */
    title?: string;
    /** 通知内容 */
    content?: string;
    /** 通知类型：info/warning/error/success */
    type?: string;
    /** 通知图标 */
    icon?: string;
    /** 通知图片 */
    image?: string;
    /** 通知链接 */
    url?: string;
    /** 通知按钮 */
    buttons?: NotificationButtonVO[];
    /** 是否需要确认 */
    needConfirm?: boolean;
    /** 是否可关闭 */
    closable?: boolean;
    /** 显示时间（毫秒） */
    duration?: number;
    /** 优先级 */
    priority?: number;
}
//# sourceMappingURL=popup-notification-vo.d.ts.map