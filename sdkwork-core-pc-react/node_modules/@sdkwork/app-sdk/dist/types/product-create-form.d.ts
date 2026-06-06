export interface ProductCreateForm {
    title: string;
    summary?: string;
    categoryId: string;
    mainImage?: string;
    images?: string[];
    price: number;
    originalPrice?: number;
    stock?: number;
    safetyStock?: number;
    status?: 'ON_SHELF' | 'OFF_SHELF' | 'OUT_OF_STOCK' | 'DRAFT';
}
//# sourceMappingURL=product-create-form.d.ts.map