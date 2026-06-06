import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
import { VoiceSpeakerVO } from './voice-speaker-vo';
export interface PageVoiceSpeakerVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: VoiceSpeakerVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-voice-speaker-vo.d.ts.map