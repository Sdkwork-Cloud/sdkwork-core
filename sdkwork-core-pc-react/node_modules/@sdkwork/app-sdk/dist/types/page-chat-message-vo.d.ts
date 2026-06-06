import { ChatMessageVO } from './chat-message-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageChatMessageVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ChatMessageVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-chat-message-vo.d.ts.map