import { CartItemVO } from './cart-item-vo';
/** Shopping cart group response */
export interface CartGroupVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Group UUID */
    uuid?: string;
    /** Group name */
    name?: string;
    /** Grouped cart items */
    items?: CartItemVO[];
    /** Group total quantity */
    totalQuantity?: number;
    /** Group total price */
    totalPrice?: number;
}
//# sourceMappingURL=cart-group-vo.d.ts.map