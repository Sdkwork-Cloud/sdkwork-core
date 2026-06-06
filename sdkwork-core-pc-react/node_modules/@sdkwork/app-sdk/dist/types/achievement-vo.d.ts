/** 成就响应 */
export interface AchievementVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 成就ID */
    id?: string;
    /** 成就名称 */
    name?: string;
    /** 成就描述 */
    description?: string;
    /** 成就图标 */
    icon?: string;
    /** 成就等级 */
    level?: string;
    /** 成就状态：locked/unlocked */
    status?: string;
    /** 解锁时间 */
    unlockedAt?: string;
    /** 成就进度 */
    progress?: number;
    /** 成就目标 */
    target?: number;
    /** 成就类型 */
    type?: string;
    /** 成就积分 */
    points?: number;
    /** 成就排序 */
    sort?: number;
}
//# sourceMappingURL=achievement-vo.d.ts.map