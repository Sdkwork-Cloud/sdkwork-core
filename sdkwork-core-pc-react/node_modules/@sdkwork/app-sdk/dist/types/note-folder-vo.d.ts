/** 笔记文件夹响应 */
export interface NoteFolderVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 文件夹ID */
    id?: number;
    /** 文件夹UUID */
    uuid?: string;
    /** 文件夹名称 */
    name?: string;
    /** 父文件夹ID */
    parentId?: number;
    /** 父文件夹名称 */
    parentName?: string;
    /** 文件夹路径 */
    path?: string;
    /** 子文件夹数量 */
    subFolderCount?: number;
    /** 笔记数量 */
    noteCount?: number;
    /** 子文件夹列表 */
    children?: NoteFolderVO[];
}
//# sourceMappingURL=note-folder-vo.d.ts.map