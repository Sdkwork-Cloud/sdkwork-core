/** 应用版本响应 */
export interface AppVersionVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 当前版本 */
    currentVersion?: string;
    /** 最新版本 */
    latestVersion?: string;
    /** 是否需要更新 */
    updateRequired?: boolean;
    /** 是否强制更新 */
    forceUpdate?: boolean;
    /** 更新描述 */
    updateDescription?: string;
    /** 更新链接 */
    updateUrl?: string;
    /** 更新大小 */
    updateSize?: string;
    /** 发布日期 */
    releaseDate?: number;
}
//# sourceMappingURL=app-version-vo.d.ts.map