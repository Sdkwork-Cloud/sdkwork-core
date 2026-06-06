/** 笔记统计响应 */
export interface NoteStatisticsVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 总笔记数 */
    totalNotes?: number;
    /** 总文件夹数 */
    totalFolders?: number;
    /** 收藏笔记数 */
    favoritedNotes?: number;
    /** 本月笔记数 */
    thisMonthNotes?: number;
    /** 本周笔记数 */
    thisWeekNotes?: number;
    /** 今日笔记数 */
    todayNotes?: number;
    /** 总字数 */
    totalWords?: number;
    /** 最后更新时间 */
    lastUpdateTime?: string;
    /** 文件夹笔记数量分布 */
    folderNoteCounts?: Record<string, number>;
    /** 标签使用统计 */
    tagUsageCounts?: Record<string, number>;
}
//# sourceMappingURL=note-statistics-vo.d.ts.map