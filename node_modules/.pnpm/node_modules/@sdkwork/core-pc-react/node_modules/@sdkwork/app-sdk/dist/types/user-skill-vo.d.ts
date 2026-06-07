import { SkillVO } from './skill-vo';
/** 用户技能安装信息 */
export interface UserSkillVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 用户技能记录ID */
    userSkillId?: number;
    /** 技能ID */
    skillId?: number;
    /** 是否启用 */
    enabled?: boolean;
    /** 用户配置 */
    config?: Record<string, unknown>;
    /** 安装时间 */
    installedAt?: string;
    /** 最近启用时间 */
    lastEnabledAt?: string;
    /** 最近使用时间 */
    lastUsedAt?: string;
    /** 使用次数 */
    usedCount?: number;
    /** 技能详情 */
    skill?: SkillVO;
}
//# sourceMappingURL=user-skill-vo.d.ts.map