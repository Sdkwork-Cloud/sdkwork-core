import { CreationChannelVO } from './creation-channel-vo';
import { CreationStyleOptionVO } from './creation-style-option-vo';
/** Creation capabilities response. */
export interface CreationCapabilitiesVO {
    /** Creation target. */
    target?: string;
    /** Channel list. */
    channels?: CreationChannelVO[];
    /** Style options for target. */
    styleOptions?: CreationStyleOptionVO[];
}
//# sourceMappingURL=creation-capabilities-vo.d.ts.map