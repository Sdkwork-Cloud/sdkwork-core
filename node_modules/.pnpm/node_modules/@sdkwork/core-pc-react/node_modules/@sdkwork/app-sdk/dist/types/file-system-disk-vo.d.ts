/** Filesystem disk object */
export interface FileSystemDiskVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Disk id */
    diskId?: string;
    /** Disk uuid */
    diskUuid?: string;
    /** Disk name */
    name?: string;
    /** Disk type */
    type?: string;
    /** Owner type */
    owner?: string;
    /** Owner id */
    ownerId?: string;
    /** Total size in bytes */
    totalSize?: number;
    /** Used size in bytes */
    usedSize?: number;
    /** Remaining size in bytes */
    remainingSize?: number;
    /** Usage rate in percent */
    usageRate?: number;
    /** Node count in this disk */
    fileCount?: number;
    /** Disk description */
    description?: string;
}
//# sourceMappingURL=file-system-disk-vo.d.ts.map