import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DataExportForm, LanguageSwitchForm, PasswordChangeForm, PlusApiResultAppConfigVO, PlusApiResultAppVersionVO, PlusApiResultDataExportVO, PlusApiResultMapStringBoolean, PlusApiResultMapStringObject, PlusApiResultPrivacySettingsVO, PlusApiResultSecuritySettingsVO, PlusApiResultTwoFactorSetupVO, PlusApiResultUISettingsVO, PlusApiResultVoid, PrivacySettingsUpdateForm, SecuritySettingsUpdateForm, SettingsUpdateForm, ThemeSwitchForm, TwoFactorToggleForm, UISettingsUpdateForm } from '../types';
export declare class SettingApi {
    private client;
    constructor(client: HttpClient);
    /** 获取模块设置 */
    getModuleSettings(module: string | number): Promise<PlusApiResultMapStringObject>;
    /** 更新模块设置 */
    updateModuleSettings(module: string | number, body: SettingsUpdateForm): Promise<PlusApiResultVoid>;
    /** 重置模块设置 */
    resetModuleSettings(module: string | number): Promise<PlusApiResultVoid>;
    /** 获取界面设置 */
    getUi(): Promise<PlusApiResultUISettingsVO>;
    /** 更新界面设置 */
    updateUi(body: UISettingsUpdateForm): Promise<PlusApiResultVoid>;
    /** 切换主题 */
    switchTheme(body: ThemeSwitchForm): Promise<PlusApiResultVoid>;
    /** 切换语言 */
    switchLanguage(body: LanguageSwitchForm): Promise<PlusApiResultVoid>;
    /** 获取安全设置 */
    getSecuritySettings(): Promise<PlusApiResultSecuritySettingsVO>;
    /** 更新安全设置 */
    updateSecuritySettings(body: SecuritySettingsUpdateForm): Promise<PlusApiResultVoid>;
    /** 修改密码 */
    changePassword(body: PasswordChangeForm): Promise<PlusApiResultVoid>;
    /** 两步验证设置 */
    toggleTwoFactor(body: TwoFactorToggleForm): Promise<PlusApiResultTwoFactorSetupVO>;
    /** 获取隐私设置 */
    getPrivacySettings(): Promise<PlusApiResultPrivacySettingsVO>;
    /** 更新隐私设置 */
    updatePrivacySettings(body: PrivacySettingsUpdateForm): Promise<PlusApiResultVoid>;
    /** 导出用户数据 */
    exportUserData(body: DataExportForm): Promise<PlusApiResultDataExportVO>;
    /** 获取所有设置 */
    getAllSettings(): Promise<PlusApiResultMapStringObject>;
    /** 重置所有设置 */
    resetAllSettings(): Promise<PlusApiResultVoid>;
    /** Check app version */
    getResolvedAppVersion(params?: QueryParams): Promise<PlusApiResultAppVersionVO>;
    /** 获取版本信息 */
    getAppVersion(params?: QueryParams): Promise<PlusApiResultAppVersionVO>;
    /** 获取功能开关 */
    getFeatureFlags(): Promise<PlusApiResultMapStringBoolean>;
    /** 获取应用配置 */
    getAppConfig(): Promise<PlusApiResultAppConfigVO>;
    /** 清除本地数据 */
    clearLocalData(): Promise<PlusApiResultVoid>;
    /** 清除缓存 */
    clearCache(): Promise<PlusApiResultVoid>;
    /** 删除账户 */
    deleteAccount(): Promise<PlusApiResultVoid>;
}
export declare function createSettingApi(client: HttpClient): SettingApi;
//# sourceMappingURL=setting.d.ts.map