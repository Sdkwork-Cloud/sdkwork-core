import { CreationStyleAssetGroupVO } from './creation-style-asset-group-vo';
/** Creation style option. */
export interface CreationStyleOptionVO {
    /** Style id. */
    id?: string;
    /** Style label. */
    label?: string;
    /** Style description. */
    description?: string;
    /** Usage notes. */
    usage?: string[];
    /** Prompt. */
    prompt?: string;
    /** Chinese prompt. */
    promptZh?: string;
    /** Whether custom style. */
    custom?: boolean;
    /** Preview color. */
    previewColor?: string;
    assets?: CreationStyleAssetGroupVO;
}
//# sourceMappingURL=creation-style-option-vo.d.ts.map