import { AssetReference } from './asset-reference';
import { ContentSegment } from './content-segment';
import { GenerationContext } from './generation-context';
/** Filesystem file content object */
export interface FileSystemContentVO {
    /** Created at */
    createdAt?: string;
    /** Updated at */
    updatedAt?: string;
    /** Node id */
    nodeId?: string;
    /** Node uuid */
    nodeUuid?: string;
    /** Content id */
    contentId?: string;
    /** File content version */
    fileVersion?: string;
    /** Encoding */
    encoding?: string;
    /** Prompt content */
    prompt?: string;
    /** Thinking content */
    thinkingContent?: string;
    /** Text content */
    text?: string;
    /** Content schema version */
    schemaVersion?: string;
    /** Content source */
    source?: string;
    /** Multi-format content map */
    contents?: Record<string, string>;
    /** Structured metadata */
    metadata?: Record<string, unknown>;
    /** Generation context */
    generation?: GenerationContext;
    /** Segment list */
    segments?: ContentSegment[];
    /** Asset references */
    references?: AssetReference[];
    /** Character count */
    charCount?: number;
    /** Word count */
    wordCount?: number;
}
//# sourceMappingURL=file-system-content-vo.d.ts.map