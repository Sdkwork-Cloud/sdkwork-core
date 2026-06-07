import { OrderingSkuOutput } from './ordering-sku-output';
export interface OrderingMenuDetailOutput {
    productId?: string;
    categoryId?: string;
    categoryName?: string;
    title?: string;
    summary?: string;
    description?: string;
    mainImage?: string;
    price?: string;
    originalPrice?: string;
    sales?: number;
    stock?: number;
    status?: string;
    tags?: string[];
    shelfTime?: string;
    skus?: OrderingSkuOutput[];
}
//# sourceMappingURL=ordering-menu-detail-output.d.ts.map