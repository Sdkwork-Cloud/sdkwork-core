/** 笔记批量更新结果 */
export interface NoteBatchUpdateResultVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 笔记ID */
    noteId?: string;
    /** 笔记UUID */
    noteUuid?: string;
    /** 更新后的版本号 */
    versionId?: string;
    /** 成功应用操作数 */
    appliedCount?: number;
    /** 跳过操作数 */
    skippedCount?: number;
    /** 更新后字符数 */
    charCount?: number;
    /** 更新后词数 */
    wordCount?: number;
}
//# sourceMappingURL=note-batch-update-result-vo.d.ts.map