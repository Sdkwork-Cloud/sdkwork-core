export interface ProductManageVO {
    id?: string;
    title?: string;
    summary?: string;
    categoryId?: string;
    categoryName?: string;
    mainImage?: string;
    images?: string[];
    status?: 'ON_SHELF' | 'OFF_SHELF' | 'OUT_OF_STOCK' | 'DRAFT';
    price?: number;
    originalPrice?: number;
    stock?: number;
    sales?: number;
    updatedAt?: string;
}
//# sourceMappingURL=product-manage-vo.d.ts.map