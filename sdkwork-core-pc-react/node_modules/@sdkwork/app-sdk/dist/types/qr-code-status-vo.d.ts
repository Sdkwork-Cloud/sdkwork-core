import { LoginVO } from './login-vo';
import { UserInfoVO } from './user-info-vo';
/** 二维码状态响应 */
export interface QrCodeStatusVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 二维码状态: pending/scanned/confirmed/expired */
    status?: 'pending' | 'scanned' | 'confirmed' | 'expired';
    /** 用户信息(扫描后返回) */
    userInfo?: UserInfoVO;
    /** 登录令牌(确认后返回) */
    token?: LoginVO;
}
//# sourceMappingURL=qr-code-status-vo.d.ts.map