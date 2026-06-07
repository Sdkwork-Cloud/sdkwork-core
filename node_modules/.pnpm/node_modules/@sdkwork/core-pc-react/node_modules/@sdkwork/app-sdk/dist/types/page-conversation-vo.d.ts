import { ConversationVO } from './conversation-vo';
import { PageableObject } from './pageable-object';
import { SortObject } from './sort-object';
export interface PageConversationVO {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: ConversationVO[];
    number?: number;
    numberOfElements?: number;
    sort?: SortObject;
    pageable?: PageableObject;
    first?: boolean;
    last?: boolean;
    empty?: boolean;
}
//# sourceMappingURL=page-conversation-vo.d.ts.map