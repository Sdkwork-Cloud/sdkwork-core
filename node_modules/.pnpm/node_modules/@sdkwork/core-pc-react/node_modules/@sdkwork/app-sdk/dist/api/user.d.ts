import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { AccountDeactivateForm, PasswordChangeForm, PlusApiResultListUserAddressVO, PlusApiResultMapStringString, PlusApiResultPageMapStringObject, PlusApiResultUserAddressVO, PlusApiResultUserProfileVO, PlusApiResultUserSettingsVO, PlusApiResultVoid, ThirdPartyBindForm, UploadAvatarRequest, UserAddressCreateForm, UserAddressUpdateForm, UserProfileUpdateForm, UserSettingsUpdateForm } from '../types';
export declare class UserApi {
    private client;
    constructor(client: HttpClient);
    /** 获取用户设置 */
    getUserSettings(): Promise<PlusApiResultUserSettingsVO>;
    /** 更新用户设置 */
    updateUserSettings(body: UserSettingsUpdateForm): Promise<PlusApiResultUserSettingsVO>;
    /** 获取用户信息 */
    getUserProfile(): Promise<PlusApiResultUserProfileVO>;
    /** 更新用户信息 */
    updateUserProfile(body: UserProfileUpdateForm): Promise<PlusApiResultUserProfileVO>;
    /** 修改密码 */
    changePassword(body: PasswordChangeForm): Promise<PlusApiResultVoid>;
    /** 获取地址详情 */
    getAddressDetail(addressId: string | number): Promise<PlusApiResultUserAddressVO>;
    /** 更新地址 */
    updateAddress(addressId: string | number, body: UserAddressUpdateForm): Promise<PlusApiResultUserAddressVO>;
    /** 删除地址 */
    deleteAddress(addressId: string | number): Promise<PlusApiResultVoid>;
    /** 设置默认地址 */
    setDefaultAddress(addressId: string | number): Promise<PlusApiResultUserAddressVO>;
    /** 注销账号 */
    deactivateAccount(body: AccountDeactivateForm): Promise<PlusApiResultVoid>;
    /** 绑定第三方账号 */
    bindThirdPartyAccount(platform: string | number, body: ThirdPartyBindForm): Promise<PlusApiResultVoid>;
    /** 解绑第三方账号 */
    unbindThirdPartyAccount(platform: string | number): Promise<PlusApiResultVoid>;
    /** 上传头像 */
    uploadAvatar(body?: UploadAvatarRequest): Promise<PlusApiResultMapStringString>;
    /** 获取地址列表 */
    listAddresses(): Promise<PlusApiResultListUserAddressVO>;
    /** 创建地址 */
    createAddress(body: UserAddressCreateForm): Promise<PlusApiResultUserAddressVO>;
    /** 获取登录历史 */
    getLoginHistory(params?: QueryParams): Promise<PlusApiResultPageMapStringObject>;
    /** 获取生成历史 */
    getGenerationHistory(params?: QueryParams): Promise<PlusApiResultPageMapStringObject>;
    /** 获取默认地址 */
    getDefaultAddress(): Promise<PlusApiResultUserAddressVO>;
}
export declare function createUserApi(client: HttpClient): UserApi;
//# sourceMappingURL=user.d.ts.map