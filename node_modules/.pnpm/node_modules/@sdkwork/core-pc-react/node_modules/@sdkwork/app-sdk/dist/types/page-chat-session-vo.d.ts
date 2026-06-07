import { ChatSessionVO } from './chat-session-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageChatSessionVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ChatSessionVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-chat-session-vo.d.ts.map