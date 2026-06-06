/** 敏感词库响应 */
export interface SensitiveWordListVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 词库ID */
    listId?: string;
    /** 词库名称 */
    name?: string;
    /** 词库描述 */
    description?: string;
    /** 词库类型 */
    type?: 'default' | 'strict' | 'custom';
    /** 词汇数量 */
    wordCount?: number;
    /** 包含类别 */
    categories?: string[];
    /** 版本号 */
    version?: string;
    /** 是否启用 */
    enabled?: boolean;
}
//# sourceMappingURL=sensitive-word-list-vo.d.ts.map