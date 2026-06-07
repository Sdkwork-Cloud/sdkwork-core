/** 笔记响应 */
export interface NoteVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 笔记ID */
    id?: number;
    /** 笔记UUID */
    uuid?: string;
    /** 笔记标题 */
    title?: string;
    /** 笔记内容 */
    content?: string;
    /** 用户ID */
    userId?: number;
    /** 文件夹ID */
    folderId?: string;
    /** 文件夹路径 */
    folderPath?: string;
    /** 标签列表 */
    tags?: string[];
    /** 访问范围 */
    accessScope?: string;
    /** 是否有密码 */
    hasPassword?: boolean;
    /** 封面图片URL */
    coverImageUrl?: string;
    /** 状态 */
    status?: string;
    /** 摘要 */
    summary?: string;
    /** 是否收藏 */
    favorited?: boolean;
    /** 字数 */
    wordCount?: number;
}
//# sourceMappingURL=note-vo.d.ts.map