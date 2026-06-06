import { CartGroupVO } from './cart-group-vo';
/** Shopping cart response */
export interface ShoppingCartVO {
    /** Created time */
    createdAt?: string;
    /** Updated time */
    updatedAt?: string;
    /** Cart id */
    cartId?: string;
    /** Cart UUID */
    uuid?: string;
    /** Cart name */
    name?: string;
    /** Cart description */
    description?: string;
    /** Owner type */
    owner?: string;
    /** Owner id */
    ownerId?: number;
    /** Cart status */
    status?: string;
    /** Cart groups */
    groups?: CartGroupVO[];
    /** Total quantity */
    totalQuantity?: number;
    /** Total price */
    totalPrice?: number;
    /** Selected quantity */
    selectedQuantity?: number;
    /** Selected total price */
    selectedPrice?: number;
}
//# sourceMappingURL=shopping-cart-vo.d.ts.map