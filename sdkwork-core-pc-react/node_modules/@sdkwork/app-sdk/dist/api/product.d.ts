import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { PlusApiResultBoolean, PlusApiResultInteger, PlusApiResultListProductAttributeVO, PlusApiResultListProductCategoryVO, PlusApiResultListProductVO, PlusApiResultListSkuVO, PlusApiResultPageProductVO, PlusApiResultProductAttributeVO, PlusApiResultProductCategoryVO, PlusApiResultProductDetailVO, PlusApiResultProductManageVO, PlusApiResultProductStatisticsVO, PlusApiResultProductStockAdjustVO, PlusApiResultProductStockLogPageVO, PlusApiResultProductVO, PlusApiResultVoid, ProductAttributeCreateRequest, ProductAttributeUpdateRequest, ProductCategoryCreateRequest, ProductCategoryUpdateRequest, ProductCreateForm, ProductStatusUpdateForm, ProductStockAdjustForm, ProductUpdateForm } from '../types';
export declare class ProductApi {
    private client;
    constructor(client: HttpClient);
    /** 更新商品属性 */
    updateProductAttribute(productId: string | number, attributeId: string | number, body: ProductAttributeUpdateRequest): Promise<PlusApiResultProductAttributeVO>;
    /** 删除商品属性 */
    deleteProductAttribute(productId: string | number, attributeId: string | number): Promise<PlusApiResultVoid>;
    /** 更新商品分类 */
    updateProductCategory(categoryId: string | number, body: ProductCategoryUpdateRequest): Promise<PlusApiResultProductCategoryVO>;
    /** 删除商品分类 */
    deleteProductCategory(categoryId: string | number): Promise<PlusApiResultVoid>;
    /** 获取商品属性 */
    listProductAttributes(productId: string | number): Promise<PlusApiResultListProductAttributeVO>;
    /** 创建商品属性 */
    createProductAttribute(productId: string | number, body: ProductAttributeCreateRequest): Promise<PlusApiResultProductAttributeVO>;
    /** 获取商品分类列表 */
    listProductCategories(params?: QueryParams): Promise<PlusApiResultListProductCategoryVO>;
    /** 创建商品分类 */
    createProductCategory(body: ProductCategoryCreateRequest): Promise<PlusApiResultProductCategoryVO>;
    /** 获取商品列表 */
    getProducts(params?: QueryParams): Promise<PlusApiResultPageProductVO>;
    /** Create product */
    createProduct(body: ProductCreateForm): Promise<PlusApiResultProductManageVO>;
    /** 获取商品详情 */
    getProductDetail(productId: string | number): Promise<PlusApiResultProductDetailVO>;
    /** Update product */
    updateProduct(productId: string | number, body: ProductUpdateForm): Promise<PlusApiResultProductManageVO>;
    /** 获取商品库存 */
    getProductStock(productId: string | number): Promise<PlusApiResultInteger>;
    /** 获取商品统计 */
    getProductStatistics(productId: string | number): Promise<PlusApiResultProductStatisticsVO>;
    /** 获取SPU详情 */
    getSpuDetail(productId: string | number): Promise<PlusApiResultProductDetailVO>;
    /** 获取商品SKU列表 */
    getProductSkus(productId: string | number, params?: QueryParams): Promise<PlusApiResultListSkuVO>;
    /** 检查商品库存 */
    checkProductStock(productId: string | number, params?: QueryParams): Promise<PlusApiResultBoolean>;
    /** 搜索商品 */
    searchProducts(params?: QueryParams): Promise<PlusApiResultPageProductVO>;
    /** 获取最新商品 */
    getLatestProducts(params?: QueryParams): Promise<PlusApiResultListProductVO>;
    /** 获取热门商品 */
    getHotProducts(params?: QueryParams): Promise<PlusApiResultListProductVO>;
    /** 按编码获取商品 */
    getProductByCode(code: string | number): Promise<PlusApiResultProductVO>;
    /** 按分类获取商品 */
    getProductsByCategory(categoryId: string | number, params?: QueryParams): Promise<PlusApiResultPageProductVO>;
    /** 获取分类属性 */
    listCategoryAttributes(categoryId: string | number): Promise<PlusApiResultListProductAttributeVO>;
    /** 获取商品分类树 */
    getProductCategoryTree(): Promise<PlusApiResultListProductCategoryVO>;
    /** Update product status */
    updateProductStatus(productId: string | number, body: ProductStatusUpdateForm): Promise<PlusApiResultProductManageVO>;
    /** Adjust product stock */
    adjustStock(productId: string | number, body: ProductStockAdjustForm): Promise<PlusApiResultProductStockAdjustVO>;
    /** List product stock logs */
    listStockLogs(productId: string | number, params?: QueryParams): Promise<PlusApiResultProductStockLogPageVO>;
}
export declare function createProductApi(client: HttpClient): ProductApi;
//# sourceMappingURL=product.d.ts.map