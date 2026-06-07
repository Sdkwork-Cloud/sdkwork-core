import { AssetReference } from './asset-reference';
import { ContentSegment } from './content-segment';
import { GenerationContext } from './generation-context';
/** Drive file content */
export interface DriveContentVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** File id */
    fileId?: string;
    /** File uuid */
    fileUuid?: string;
    /** File version */
    fileVersion?: string;
    /** Content id */
    contentId?: string;
    /** Encoding */
    encoding?: string;
    /** Prompt */
    prompt?: string;
    /** Thinking content */
    thinkingContent?: string;
    /** Text */
    text?: string;
    /** Content schema version */
    schemaVersion?: string;
    /** Content source */
    source?: string;
    /** Multiformat content map */
    contents?: Record<string, string>;
    /** Structured metadata */
    metadata?: Record<string, unknown>;
    /** Generation context */
    generation?: GenerationContext;
    /** Segment list */
    segments?: ContentSegment[];
    /** Asset references */
    references?: AssetReference[];
}
//# sourceMappingURL=drive-content-vo.d.ts.map