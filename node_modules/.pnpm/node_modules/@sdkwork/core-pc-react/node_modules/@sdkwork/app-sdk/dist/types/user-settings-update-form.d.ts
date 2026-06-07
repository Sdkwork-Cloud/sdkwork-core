import { DownloadSettings } from './download-settings';
import { NotificationSettings } from './notification-settings';
import { PrivacySettings } from './privacy-settings';
export interface UserSettingsUpdateForm {
    notificationSettings?: NotificationSettings;
    privacySettings?: PrivacySettings;
    language?: string;
    theme?: string;
    autoPlay?: boolean;
    highQuality?: boolean;
    dataSaver?: boolean;
    downloadSettings?: DownloadSettings;
}
//# sourceMappingURL=user-settings-update-form.d.ts.map