/** 产品属性 */
export interface ProductAttributeVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 属性ID */
    id?: string;
    /** 属性名称 */
    name?: string;
    /** 属性值列表 */
    values?: string[];
    /** 是否可搜索 */
    searchable?: boolean;
    /** 是否可筛选 */
    filterable?: boolean;
    /** 排序 */
    sort?: number;
}
//# sourceMappingURL=product-attribute-vo.d.ts.map