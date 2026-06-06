import { ProductStockAdjustVO } from './product-stock-adjust-vo';
export interface PlusApiResultProductStockAdjustVO {
    /** 2000 success; 4301 product not found; 4304 stock adjust out of range; 5301 product management internal error.
   */
    code?: string;
    msg?: string;
    data?: ProductStockAdjustVO;
    requestId?: string;
}
//# sourceMappingURL=plus-api-result-product-stock-adjust-vo.d.ts.map