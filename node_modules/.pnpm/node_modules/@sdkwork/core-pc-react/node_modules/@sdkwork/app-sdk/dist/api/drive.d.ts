import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { DriveBatchDeleteForm, DriveContentUpdateForm, DriveCopyForm, DriveFolderCreateForm, DriveMoveForm, DriveRenameForm, DriveUploadCompleteForm, DriveUploadInitForm, PlusApiResultDriveContentVO, PlusApiResultDriveItemDetailVO, PlusApiResultDriveItemVO, PlusApiResultDriveUploadInitVO, PlusApiResultPageDriveItemVO, PlusApiResultVoid } from '../types';
export declare class DriveApi {
    private client;
    constructor(client: HttpClient);
    /** Restore drive item */
    restoreItem(itemId: string | number): Promise<PlusApiResultDriveItemVO>;
    /** Rename drive item */
    renameItem(itemId: string | number, body: DriveRenameForm): Promise<PlusApiResultDriveItemVO>;
    /** Move drive item */
    moveItem(itemId: string | number, body: DriveMoveForm): Promise<PlusApiResultDriveItemVO>;
    /** Get drive file content */
    getItemContent(itemId: string | number): Promise<PlusApiResultDriveContentVO>;
    /** Update drive file content */
    updateItemContent(itemId: string | number, body: DriveContentUpdateForm): Promise<PlusApiResultDriveContentVO>;
    /** Archive drive item */
    archiveItem(itemId: string | number): Promise<PlusApiResultDriveItemVO>;
    /** Favorite drive item */
    favoriteItem(itemId: string | number): Promise<PlusApiResultDriveItemVO>;
    /** Unfavorite drive item */
    unfavoriteItem(itemId: string | number): Promise<PlusApiResultDriveItemVO>;
    /** Copy drive item */
    copyItem(itemId: string | number, body: DriveCopyForm): Promise<PlusApiResultDriveItemVO>;
    /** Batch delete drive items */
    batchDeleteItems(body: DriveBatchDeleteForm): Promise<PlusApiResultVoid>;
    /** Create drive folder */
    createFolder(body: DriveFolderCreateForm): Promise<PlusApiResultDriveItemVO>;
    /** List drive items */
    listItems(params?: QueryParams): Promise<PlusApiResultPageDriveItemVO>;
    /** Get drive item detail */
    getItemDetail(itemId: string | number): Promise<PlusApiResultDriveItemDetailVO>;
    /** Delete drive item */
    deleteItem(itemId: string | number): Promise<PlusApiResultVoid>;
    /** Clear drive trash */
    clearTrash(): Promise<PlusApiResultVoid>;
    /** Permanently delete drive item */
    permanentlyDeleteItem(itemId: string | number): Promise<PlusApiResultVoid>;
    /** Upload file directly into drive */
    uploadItem(body: FormData): Promise<PlusApiResultDriveItemVO>;
    /** Initialize resumable drive upload */
    initUpload(body: DriveUploadInitForm): Promise<PlusApiResultDriveUploadInitVO>;
    /** Complete resumable upload and create drive item */
    completeUpload(uploadId: string | number, body: DriveUploadCompleteForm): Promise<PlusApiResultDriveItemVO>;
}
export declare function createDriveApi(client: HttpClient): DriveApi;
//# sourceMappingURL=drive.d.ts.map