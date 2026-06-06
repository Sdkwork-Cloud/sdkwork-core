import { FileMediaResource } from './file-media-resource';
import { ImageMediaResource } from './image-media-resource';
/** Drive item */
export interface DriveItemVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Drive item id */
    itemId: string;
    /** Drive item uuid */
    itemUuid?: string;
    /** Drive item name */
    itemName?: string;
    /** File type, FILE or DIRECTORY */
    fileType?: string;
    /** Whether current item is a directory */
    directory?: boolean;
    /** Asset type, e.g. IMAGE/VIDEO/AUDIO/DOCUMENT */
    assetType?: string;
    /** Mime type */
    mimeType?: string;
    /** File extension */
    extension?: string;
    /** File size in bytes */
    size?: number;
    /** Parent id */
    parentId?: string;
    /** Path */
    path?: string;
    /** Storage object key */
    objectKey?: string;
    /** Status */
    status?: string;
    /** Whether favorited */
    favorited?: boolean;
    /** Primary resource */
    resource?: FileMediaResource;
    /** Cover image */
    coverImage?: ImageMediaResource;
    name: string;
    accessUrl?: string;
}
//# sourceMappingURL=drive-item-vo.d.ts.map