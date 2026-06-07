import { ProductStockLogPageVO } from './product-stock-log-page-vo';
export interface PlusApiResultProductStockLogPageVO {
    /** 2000 success; 4301 product not found; 4305 stock log query invalid; 5301 product management internal error.
   */
    code?: string;
    msg?: string;
    data?: ProductStockLogPageVO;
    requestId?: string;
}
//# sourceMappingURL=plus-api-result-product-stock-log-page-vo.d.ts.map