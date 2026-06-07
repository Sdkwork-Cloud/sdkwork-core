/** Filesystem node object */
export interface FileSystemNodeVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Node id */
    nodeId?: string;
    /** Node uuid */
    nodeUuid?: string;
    /** Node name */
    name?: string;
    /** Node type: FILE or DIRECTORY */
    type?: string;
    /** Whether this node is directory */
    directory?: boolean;
    /** Disk id */
    diskId?: string;
    /** Parent id */
    parentId?: string;
    /** Path */
    path?: string;
    /** Relative path */
    relativePath?: string;
    /** Storage object key */
    objectKey?: string;
    /** File size in bytes */
    size?: number;
    /** Mime type */
    mimeType?: string;
    /** File extension */
    extension?: string;
    /** Asset type */
    assetType?: string;
    /** Status */
    status?: string;
    /** Description */
    description?: string;
    /** Tags */
    tags?: string[];
    /** Version id */
    versionId?: string;
    /** Upload status */
    uploadStatus?: string;
}
//# sourceMappingURL=file-system-node-vo.d.ts.map