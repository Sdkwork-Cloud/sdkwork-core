import { CategoryTreeVO } from './category-tree-vo';
/** API调用结果 */
export interface PlusApiResultListCategoryTreeVO {
    /** Response data */
    data: CategoryTreeVO[];
    /** Response code: 2000=success, 4xxx=business failure, 5xxx=server error */
    code: string;
    /** Business message */
    msg: string;
    /** Request identifier */
    requestId: string;
    /** Client IP address */
    ip?: string;
    /** Server hostname */
    hostname?: string;
    /** Business error name */
    errorName: string;
}
//# sourceMappingURL=plus-api-result-list-category-tree-vo.d.ts.map