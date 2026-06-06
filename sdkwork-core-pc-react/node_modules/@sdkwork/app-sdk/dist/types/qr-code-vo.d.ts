/** QR code payload for cross-channel login or registration continuation. */
export interface QrCodeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** QR code type identifier. */
    type?: string;
    /** QR code display title. */
    title?: string;
    /** QR code usage description. */
    description?: string;
    /** Unique QR code key. */
    qrKey?: string;
    /** QR code image URL. */
    qrUrl?: string;
    /** Raw QR content for client-side rendering. */
    qrContent?: string;
    /** QR code expiration time in seconds. */
    expireTime?: number;
}
//# sourceMappingURL=qr-code-vo.d.ts.map