export interface PasswordResetRequestForm {
    /** Email or phone. */
    account: string;
    channel: 'EMAIL' | 'SMS';
    deviceId?: string;
    locale?: string;
    redirectUri?: string;
}
//# sourceMappingURL=password-reset-request-form.d.ts.map