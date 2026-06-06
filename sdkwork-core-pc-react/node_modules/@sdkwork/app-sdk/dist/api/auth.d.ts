import { HttpClient } from '../http/client';
import { LoginForm, OAuthAuthUrlForm, OAuthLoginForm, PasswordResetForm, PasswordResetRequestForm, PhoneLoginForm, PlusApiResultLoginVO, PlusApiResultOAuthUrlVO, PlusApiResultQrCodeStatusVO, PlusApiResultQrCodeVO, PlusApiResultUserInfoVO, PlusApiResultVerifyResultVO, PlusApiResultVoid, QrCodeConfirmForm, RegisterForm, TokenRefreshForm, VerifyCodeCheckForm, VerifyCodeSendForm } from '../types';
export declare class AuthApi {
    private client;
    constructor(client: HttpClient);
    /** 发送验证码 */
    sendSmsCode(body: VerifyCodeSendForm): Promise<PlusApiResultVoid>;
    /** 发送验证码 */
    createSendSmsCode(body: VerifyCodeSendForm): Promise<PlusApiResultVoid>;
    /** 验证验证码 */
    verifySmsCode(body: VerifyCodeCheckForm): Promise<PlusApiResultVerifyResultVO>;
    /** 验证验证码 */
    createVerifySmsCode(body: VerifyCodeCheckForm): Promise<PlusApiResultVerifyResultVO>;
    /** 用户注册 */
    register(body: RegisterForm): Promise<PlusApiResultUserInfoVO>;
    /** 刷新令牌 */
    refreshToken(body: TokenRefreshForm): Promise<PlusApiResultLoginVO>;
    /** 生成登录二维码 */
    generateQrCode(): Promise<PlusApiResultQrCodeVO>;
    /** 确认二维码登录 */
    confirmQrCodeLogin(body: QrCodeConfirmForm): Promise<PlusApiResultVoid>;
    /** 手机号验证码登录 */
    phoneLogin(body: PhoneLoginForm): Promise<PlusApiResultLoginVO>;
    /** 重置密码 */
    resetPassword(body: PasswordResetForm): Promise<PlusApiResultVoid>;
    /** Request password reset challenge */
    requestPasswordResetChallenge(body: PasswordResetRequestForm): Promise<PlusApiResultVoid>;
    /** OAuth授权URL */
    getOauthUrl(body: OAuthAuthUrlForm): Promise<PlusApiResultOAuthUrlVO>;
    /** OAuth登录 */
    oauthLogin(body: OAuthLoginForm): Promise<PlusApiResultLoginVO>;
    /** 用户登出 */
    logout(): Promise<PlusApiResultVoid>;
    /** 用户登录 */
    login(body: LoginForm): Promise<PlusApiResultLoginVO>;
    /** 检查二维码状态 */
    checkQrCodeStatus(qrKey: string | number): Promise<PlusApiResultQrCodeStatusVO>;
    /** 二维码统一入口 */
    qrCodeEntry(qrKey: string | number): Promise<void>;
}
export declare function createAuthApi(client: HttpClient): AuthApi;
//# sourceMappingURL=auth.d.ts.map