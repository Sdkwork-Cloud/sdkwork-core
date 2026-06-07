/** 笔记正文响应 */
export interface NoteContentVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 笔记ID */
    noteId?: string;
    /** 笔记UUID */
    noteUuid?: string;
    /** 内容记录ID */
    contentId?: string;
    /** 内容版本 */
    versionId?: string;
    /** 编码格式 */
    encoding?: string;
    /** 提示词 */
    prompt?: string;
    /** 思维链内容 */
    thinkingContent?: string;
    /** 文本正文 */
    text?: string;
    /** 多格式内容映射 */
    contents?: Record<string, string>;
    /** 字符数 */
    charCount?: number;
    /** 词数 */
    wordCount?: number;
}
//# sourceMappingURL=note-content-vo.d.ts.map