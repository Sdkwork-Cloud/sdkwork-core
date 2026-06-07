import { HttpClient } from '../http/client';
import { QueryParams } from '../types/common';
import { BatchAssignmentForm, BatchFeatureCheckForm, ExperimentConversionForm, ExperimentEventForm, ExperimentExposureForm, ExperimentFeedbackForm, PlusApiResultAlgorithmConfigVO, PlusApiResultExperimentAssignmentVO, PlusApiResultExperimentDetailVO, PlusApiResultExperimentReportVO, PlusApiResultExperimentResultsVO, PlusApiResultFeatureFlagVO, PlusApiResultListExperimentVO, PlusApiResultListFeatureFlagVO, PlusApiResultListRolloutConfigVO, PlusApiResultMapStringExperimentAssignmentVO, PlusApiResultMapStringFeatureFlagVO, PlusApiResultMapStringObject, PlusApiResultRolloutCheckVO, PlusApiResultUiConfigVO, PlusApiResultVoid } from '../types';
export declare class AbtestApi {
    private client;
    constructor(client: HttpClient);
    /** 实验反馈 */
    submitExperimentFeedback(experimentId: string | number, body: ExperimentFeedbackForm): Promise<PlusApiResultVoid>;
    /** 退出实验 */
    exitExperiment(experimentId: string | number, params?: QueryParams): Promise<PlusApiResultVoid>;
    /** 所有特性开关 */
    listFeatureFlags(): Promise<PlusApiResultListFeatureFlagVO>;
    /** 批量特性开关 */
    batchCheckFeatures(body: BatchFeatureCheckForm): Promise<PlusApiResultMapStringFeatureFlagVO>;
    /** 上报实验曝光 */
    trackExperimentExposure(body: ExperimentExposureForm): Promise<PlusApiResultVoid>;
    /** 上报实验事件 */
    trackExperimentEvent(body: ExperimentEventForm): Promise<PlusApiResultVoid>;
    /** 上报实验转化 */
    trackExperimentConversion(body: ExperimentConversionForm): Promise<PlusApiResultVoid>;
    /** 批量获取分组 */
    batchGetAssignments(body: BatchAssignmentForm): Promise<PlusApiResultMapStringExperimentAssignmentVO>;
    /** 实验结果 */
    getExperimentResults(experimentId: string | number): Promise<PlusApiResultExperimentResultsVO>;
    /** 实验报告 */
    getExperimentReport(experimentId: string | number): Promise<PlusApiResultExperimentReportVO>;
    /** UI配置 */
    getUiConfig(): Promise<PlusApiResultUiConfigVO>;
    /** 灰度配置 */
    listRolloutConfigs(): Promise<PlusApiResultListRolloutConfigVO>;
    /** 灰度发布 */
    checkRollout(rolloutKey: string | number): Promise<PlusApiResultRolloutCheckVO>;
    /** 特性开关 */
    checkFeatureFlag(featureKey: string | number): Promise<PlusApiResultFeatureFlagVO>;
    /** 可用实验 */
    listAvailableExperiments(): Promise<PlusApiResultListExperimentVO>;
    /** 实验详情 */
    getExperimentDetail(experimentId: string | number): Promise<PlusApiResultExperimentDetailVO>;
    /** 个性化配置 */
    getPersonalizedConfig(): Promise<PlusApiResultMapStringObject>;
    /** 获取实验分组 */
    getExperimentAssignment(params?: QueryParams): Promise<PlusApiResultExperimentAssignmentVO>;
    /** 算法配置 */
    getAlgorithmConfig(): Promise<PlusApiResultAlgorithmConfigVO>;
}
export declare function createAbtestApi(client: HttpClient): AbtestApi;
//# sourceMappingURL=abtest.d.ts.map