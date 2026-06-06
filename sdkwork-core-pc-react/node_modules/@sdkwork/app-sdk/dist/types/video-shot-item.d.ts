import { AssetMediaResourceList } from './asset-media-resource-list';
import { ImageMediaResource } from './image-media-resource';
import { VideoMediaResource } from './video-media-resource';
/** Video shot item */
export interface VideoShotItem {
    /** Shot unique identifier */
    id?: string;
    /** Shot UUID identifier */
    uuid?: string;
    /** Video shot prompt */
    shotPrompt?: string;
    /** Shot dialogue content */
    dialogue?: string;
    /** Duration (seconds) */
    duration?: number;
    /** Start frame image resource */
    startFrame?: ImageMediaResource;
    /** End frame image resource */
    endFrame?: ImageMediaResource;
    /** Single image mode image resource */
    image?: ImageMediaResource;
    /** Other resources */
    resourceList?: AssetMediaResourceList;
    /** Voice emotion */
    emotion?: 'NEUTRAL' | 'HAPPY' | 'EXCITED' | 'SERIOUS';
    /** Shot video generation description */
    videoDescription?: string;
    /** Generated video resource */
    video?: VideoMediaResource;
}
//# sourceMappingURL=video-shot-item.d.ts.map