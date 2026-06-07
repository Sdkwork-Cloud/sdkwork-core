/** 快捷方式响应 */
export interface ShortcutVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 快捷方式ID */
    id?: string;
    /** 快捷方式名称 */
    name?: string;
    /** 快捷方式图标 */
    icon?: string;
    /** 快捷方式链接 */
    url?: string;
    /** 快捷方式类型：tool/model/template/resource */
    type?: string;
    /** 快捷方式排序 */
    sort?: number;
    /** 快捷方式分组 */
    group?: string;
    /** 快捷方式描述 */
    description?: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 是否启用 */
    enabled?: boolean;
    /** 使用次数 */
    usageCount?: number;
    /** 最近使用时间 */
    lastUsedAt?: string;
}
//# sourceMappingURL=shortcut-vo.d.ts.map