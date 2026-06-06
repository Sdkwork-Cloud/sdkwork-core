export interface SecuritySettingsUpdateForm {
    twoFactorEnabled?: boolean;
    biometricEnabled?: boolean;
    autoLockEnabled?: boolean;
    autoLockMinutes?: number;
    loginNotificationsEnabled?: boolean;
    ipRestrictionEnabled?: boolean;
    allowedIps?: string[];
    passwordStrengthCheckEnabled?: boolean;
    passwordExpiryDays?: number;
}
//# sourceMappingURL=security-settings-update-form.d.ts.map