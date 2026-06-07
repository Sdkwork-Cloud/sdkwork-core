export interface ClawAuthRegisterForm {
    /** Claw username. */
    username: string;
    /** Claw password. */
    password: string;
    /** Confirm password. */
    confirmPassword?: string;
    /** Claw key. */
    clawKey: string;
    /** Claw display name. */
    displayName: string;
    /** Bind existing app id. */
    appId?: number;
    /** App name when auto creating claw app. */
    appName?: string;
    /** Email for registration. */
    email?: string;
    /** Phone for registration. */
    phone?: string;
    /** Verification code for email or phone registration. */
    verificationCode?: string;
    /** Client semantic version used to negotiate follow-up QR code capabilities. */
    clientVersion?: string;
    /** Remember me. */
    rememberMe?: boolean;
}
//# sourceMappingURL=claw-auth-register-form.d.ts.map