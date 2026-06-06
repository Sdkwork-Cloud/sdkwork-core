export interface BrowseHistoryVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 记录ID */
    id?: string;
    /** 浏览类型 */
    type?: string;
    /** 目标ID */
    targetId?: string;
    /** 目标名称 */
    targetName?: string;
    /** 目标描述 */
    targetDescription?: string;
    /** 目标图标 */
    targetIcon?: string;
    /** 浏览时间 */
    browseTime?: string;
    /** 浏览时长(秒) */
    duration?: number;
    /** 浏览来源 */
    source?: string;
}
//# sourceMappingURL=browse-history-vo.d.ts.map