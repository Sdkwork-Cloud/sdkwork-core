import { NotificationSettingsVO } from './notification-settings-vo';
import { PrivacySettingsVO } from './privacy-settings-vo';
/** 用户设置响应 */
export interface UserSettingsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 主题 */
    theme?: string;
    /** 语言 */
    language?: string;
    /** 通知设置 */
    notificationSettings?: NotificationSettingsVO;
    /** 隐私设置 */
    privacySettings?: PrivacySettingsVO;
}
//# sourceMappingURL=user-settings-vo.d.ts.map