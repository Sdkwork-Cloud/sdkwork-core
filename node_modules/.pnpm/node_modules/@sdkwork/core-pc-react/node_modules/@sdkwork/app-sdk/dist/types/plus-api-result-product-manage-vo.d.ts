import { ProductManageVO } from './product-manage-vo';
export interface PlusApiResultProductManageVO {
    /** 2000 success; 4301 product not found; 4302 invalid product payload; 4303 product status conflict; 5301 product management internal error.
   */
    code?: string;
    msg?: string;
    data?: ProductManageVO;
    requestId?: string;
}
//# sourceMappingURL=plus-api-result-product-manage-vo.d.ts.map