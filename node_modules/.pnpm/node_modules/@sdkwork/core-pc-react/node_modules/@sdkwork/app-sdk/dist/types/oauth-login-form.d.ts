export interface OAuthLoginForm {
    provider: 'WECHAT' | 'QQ' | 'WEIBO' | 'GITHUB' | 'GOOGLE' | 'FACEBOOK' | 'TWITTER' | 'LINKEDIN' | 'MICROSOFT' | 'APPLE' | 'ALIPAY' | 'DINGTALK' | 'GITEE' | 'DOUYIN';
    code: string;
    state?: string;
    deviceId?: string;
    deviceType?: string;
}
//# sourceMappingURL=oauth-login-form.d.ts.map