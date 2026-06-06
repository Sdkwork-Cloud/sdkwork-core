/** 更新日志响应 */
export interface ChangelogVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 版本号 */
    version?: string;
    /** 发布日期 */
    releaseDate?: string;
    /** 更新标题 */
    title?: string;
    /** 新特性 */
    features?: string[];
    /** Bug修复 */
    bugFixes?: string[];
    /** 改进 */
    improvements?: string[];
    /** 状态 */
    status?: string;
    /** 下载链接 */
    downloadUrl?: string;
}
//# sourceMappingURL=changelog-vo.d.ts.map