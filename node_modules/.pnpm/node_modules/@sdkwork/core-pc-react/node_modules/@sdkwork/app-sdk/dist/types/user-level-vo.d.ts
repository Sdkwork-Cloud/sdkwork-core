import { PrivilegeVO } from './privilege-vo';
/** 用户等级响应 */
export interface UserLevelVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 等级ID */
    id?: string;
    /** 等级名称 */
    name?: string;
    /** 等级图标 */
    icon?: string;
    /** 等级描述 */
    description?: string;
    /** 等级数值 */
    level?: number;
    /** 当前经验值 */
    currentExp?: number;
    /** 升级所需经验值 */
    requiredExp?: number;
    /** 经验值进度 */
    expProgress?: number;
    /** 等级特权 */
    privileges?: PrivilegeVO[];
    /** 等级有效期 */
    validUntil?: string;
    /** 等级状态：active/expired */
    status?: string;
}
//# sourceMappingURL=user-level-vo.d.ts.map