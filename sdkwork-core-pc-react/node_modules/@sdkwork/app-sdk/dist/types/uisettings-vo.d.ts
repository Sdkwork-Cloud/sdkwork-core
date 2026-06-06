/** 界面设置响应 */
export interface UISettingsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 主题 */
    theme?: string;
    /** 语言 */
    language?: string;
    /** 字体大小 */
    fontSize?: string;
    /** 界面缩放 */
    zoomLevel?: number;
    /** 是否显示通知 */
    notificationsEnabled?: boolean;
    /** 是否显示快捷方式 */
    shortcutsEnabled?: boolean;
    /** 侧边栏状态：expanded/collapsed */
    sidebarState?: string;
    /** 是否自动保存 */
    autoSaveEnabled?: boolean;
}
//# sourceMappingURL=uisettings-vo.d.ts.map