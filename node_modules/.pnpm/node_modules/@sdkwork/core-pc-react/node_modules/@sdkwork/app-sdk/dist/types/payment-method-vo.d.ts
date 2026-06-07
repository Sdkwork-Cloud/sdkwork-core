import { PaymentProductTypeVO } from './payment-product-type-vo';
/** Payment method response */
export interface PaymentMethodVO {
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** Payment method code */
    code?: string;
    /** Payment method id */
    methodId?: string;
    /** Payment method name */
    methodName?: string;
    /** Payment method icon */
    methodIcon?: string;
    /** Whether the method is enabled */
    enabled?: boolean;
    /** Sort order */
    sort?: number;
    /** Icon */
    icon?: string;
    /** Whether the method is available */
    available?: boolean;
    /** Supported product types */
    productTypes?: PaymentProductTypeVO[];
}
//# sourceMappingURL=payment-method-vo.d.ts.map