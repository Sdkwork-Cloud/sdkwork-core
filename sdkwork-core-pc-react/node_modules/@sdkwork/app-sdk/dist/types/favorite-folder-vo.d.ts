import { FavoriteItemVO } from './favorite-item-vo';
/** 收藏文件夹响应 */
export interface FavoriteFolderVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 文件夹ID */
    folderId?: string;
    /** 文件夹名称 */
    folderName?: string;
    /** 父文件夹ID */
    parentFolderId?: string;
    /** 文件夹描述 */
    folderDescription?: string;
    /** 子文件夹列表 */
    subFolders?: FavoriteFolderVO[];
    /** 收藏项列表 */
    favoriteItems?: FavoriteItemVO[];
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 收藏数量 */
    favoriteCount?: number;
}
//# sourceMappingURL=favorite-folder-vo.d.ts.map