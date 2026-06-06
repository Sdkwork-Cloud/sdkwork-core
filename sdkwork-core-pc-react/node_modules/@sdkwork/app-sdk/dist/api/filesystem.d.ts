import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { FileSystemContentUpdateForm, FileSystemCopyForm, FileSystemFileCreateForm, FileSystemFolderCreateForm, FileSystemMoveForm, FileSystemRenameForm, PlusApiResultFileSystemContentVO, PlusApiResultFileSystemDiskVO, PlusApiResultFileSystemNodeVO, PlusApiResultListFileSystemDiskVO, PlusApiResultPageFileSystemNodeVO, PlusApiResultVoid } from '../types';
export declare class FilesystemApi {
    private client;
    constructor(client: HttpClient);
    /** Rename node */
    renameNode(nodeId: string | number, body: FileSystemRenameForm): Promise<PlusApiResultFileSystemNodeVO>;
    /** Move node */
    moveNode(nodeId: string | number, body: FileSystemMoveForm): Promise<PlusApiResultFileSystemNodeVO>;
    /** Get file content */
    getFileContent(fileId: string | number): Promise<PlusApiResultFileSystemContentVO>;
    /** Update file content */
    updateFileContent(fileId: string | number, body: FileSystemContentUpdateForm): Promise<PlusApiResultFileSystemContentVO>;
    /** Copy node */
    copyNode(nodeId: string | number, body: FileSystemCopyForm): Promise<PlusApiResultFileSystemNodeVO>;
    /** Create folder */
    createFolder(body: FileSystemFolderCreateForm): Promise<PlusApiResultFileSystemNodeVO>;
    /** Create file */
    createFile(body: FileSystemFileCreateForm): Promise<PlusApiResultFileSystemNodeVO>;
    /** List nodes */
    listNodes(params?: QueryParams): Promise<PlusApiResultPageFileSystemNodeVO>;
    /** Get node detail */
    getNodeDetail(nodeId: string | number): Promise<PlusApiResultFileSystemNodeVO>;
    /** Delete node */
    deleteNode(nodeId: string | number): Promise<PlusApiResultVoid>;
    /** List disks */
    listDisks(): Promise<PlusApiResultListFileSystemDiskVO>;
    /** Get primary disk */
    getPrimaryDisk(): Promise<PlusApiResultFileSystemDiskVO>;
}
export declare function createFilesystemApi(client: HttpClient): FilesystemApi;
//# sourceMappingURL=filesystem.d.ts.map