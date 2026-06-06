import { ShareInfoVO } from './share-info-vo';
/** 分享验证响应 */
export interface ShareVerifyVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 验证结果 */
    valid?: boolean;
    /** 错误信息 */
    errorMessage?: string;
    /** 分享信息 */
    shareInfo?: ShareInfoVO;
}
//# sourceMappingURL=share-verify-vo.d.ts.map