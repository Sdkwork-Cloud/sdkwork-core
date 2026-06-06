import { OrderingCategoryOutput } from './ordering-category-output';
import { OrderingMenuItemOutput } from './ordering-menu-item-output';
import { OrderingShopDetailOutput } from './ordering-shop-detail-output';
export interface OrderingShopHomeOutput {
    shop?: OrderingShopDetailOutput;
    menuItemCount?: number;
    categoryCount?: number;
    hotItemCount?: number;
    categories?: OrderingCategoryOutput[];
    hotItems?: OrderingMenuItemOutput[];
}
//# sourceMappingURL=ordering-shop-home-output.d.ts.map