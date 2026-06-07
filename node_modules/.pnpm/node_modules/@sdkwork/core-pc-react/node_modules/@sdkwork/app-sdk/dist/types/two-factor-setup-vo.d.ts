/** 两步验证设置响应 */
export interface TwoFactorSetupVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 验证方式：app/sms/email */
    method?: string;
    /** QR码数据（仅首次设置时返回） */
    qrCodeData?: string;
    /** 验证码密钥（仅首次设置时返回） */
    secretKey?: string;
    /** 验证代码 */
    verificationCode?: string;
    /** 恢复代码列表 */
    recoveryCodes?: string[];
}
//# sourceMappingURL=two-factor-setup-vo.d.ts.map