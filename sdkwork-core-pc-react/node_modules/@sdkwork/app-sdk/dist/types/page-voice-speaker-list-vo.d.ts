import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { VoiceSpeakerListVO } from './voice-speaker-list-vo';
export interface PageVoiceSpeakerListVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: VoiceSpeakerListVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-voice-speaker-list-vo.d.ts.map