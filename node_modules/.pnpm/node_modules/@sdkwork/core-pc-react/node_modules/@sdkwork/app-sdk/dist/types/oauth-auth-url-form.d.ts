export interface OAuthAuthUrlForm {
    provider: 'WECHAT' | 'QQ' | 'WEIBO' | 'GITHUB' | 'GOOGLE' | 'FACEBOOK' | 'TWITTER' | 'LINKEDIN' | 'MICROSOFT' | 'APPLE' | 'ALIPAY' | 'DINGTALK' | 'GITEE' | 'DOUYIN';
    redirectUri: string;
    scope?: string;
    state?: string;
}
//# sourceMappingURL=oauth-auth-url-form.d.ts.map