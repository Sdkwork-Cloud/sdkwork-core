import { QrCodeVO } from './qr-code-vo';
/** Claw login response. */
export interface ClawLoginVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Runtime auth token for Authorization header */
    authToken: string;
    /** App-scoped access token for Access-Token header */
    accessToken: string;
    /** Refresh token */
    refreshToken?: string;
    /** Token expires in seconds */
    expiresIn?: number;
    /** Claw id */
    clawId: number;
    /** Claw user id */
    clawUserId: number;
    /** Claw key */
    clawKey?: string;
    /** Claw display name */
    displayName?: string;
    /** Bound app id */
    appId: number;
    /** Bound app name */
    appName?: string;
    /** Version-aware QR codes for login/register continuation. */
    qrCodes?: QrCodeVO[];
}
//# sourceMappingURL=claw-login-vo.d.ts.map