import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { GetModelPricesRequest, PlusApiResultCreationCapabilitiesVO, PlusApiResultListModelPriceVO, PlusApiResultListModelTypeVO, PlusApiResultListString, PlusApiResultModelInfoDetailVO, PlusApiResultModelPriceVO, PlusApiResultModelStatisticsVO, PlusApiResultPageModelInfoVO } from '../types';
export declare class ModelApi {
    private client;
    constructor(client: HttpClient);
    /** Batch get model prices */
    getModelPrices(body: GetModelPricesRequest): Promise<PlusApiResultListModelPriceVO>;
    /** Get model detail */
    getModelById(modelId: string | number): Promise<PlusApiResultModelInfoDetailVO>;
    /** Get model types */
    getModelTypes(): Promise<PlusApiResultListModelTypeVO>;
    /** Get models by type */
    getModelsByType(modelType: string | number, params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get model statistics */
    getModelStatistics(): Promise<PlusApiResultModelStatisticsVO>;
    /** Search models */
    searchModels(params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get model default price */
    getModelPrice(model: string | number, params?: QueryParams): Promise<PlusApiResultModelPriceVO>;
    /** Get model pricing rules */
    getModelPriceRules(model: string | number, params?: QueryParams): Promise<PlusApiResultListModelPriceVO>;
    /** Get popular models */
    getPopularModels(params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get models by family */
    getModelsByFamily(family: string | number, params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get all families */
    getAllFamilies(): Promise<PlusApiResultListString>;
    /** Get models by channel */
    getModelsByChannel(channel: string | number, params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get model detail by alias */
    getModelBy(model: string | number): Promise<PlusApiResultModelInfoDetailVO>;
    /** Get active models */
    getActiveModels(params?: QueryParams): Promise<PlusApiResultPageModelInfoVO>;
    /** Get creation capabilities */
    getCreationCapabilities(params?: QueryParams): Promise<PlusApiResultCreationCapabilitiesVO>;
}
export declare function createModelApi(client: HttpClient): ModelApi;
//# sourceMappingURL=model.d.ts.map