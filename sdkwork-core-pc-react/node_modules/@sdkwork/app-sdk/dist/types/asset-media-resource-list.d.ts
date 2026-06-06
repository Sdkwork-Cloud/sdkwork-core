import { AssetMediaResource } from './asset-media-resource';
import { AudioMediaResource } from './audio-media-resource';
import { FileMediaResource } from './file-media-resource';
import { ImageMediaResource } from './image-media-resource';
import { MusicMediaResource } from './music-media-resource';
import { VideoMediaResource } from './video-media-resource';
/** 媒体资源列表 */
export interface AssetMediaResourceList {
    /** 图片资源列表 */
    images?: ImageMediaResource[];
    /** 视频资源列表 */
    videos?: VideoMediaResource[];
    /** 音频资源列表 */
    audios?: AudioMediaResource[];
    /** 文件资源列表 */
    files?: FileMediaResource[];
    /** 音乐资源列表 */
    musics?: MusicMediaResource[];
    /** 通用资源列表 */
    resources?: AssetMediaResource[];
}
//# sourceMappingURL=asset-media-resource-list.d.ts.map